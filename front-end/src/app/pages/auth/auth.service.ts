import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Utilities } from "src/app/@shared/utilities/utilities";

@Injectable({providedIn: "root"})
export class AuthService{

  constructor(
    private httpClient: HttpClient
  ){ }

  public login(userData: any){
    Utilities.request(this.httpClient, "post", "/users/login", userData).subscribe({
      error: ()=>{
        this.showErrorMessage();
      },
      next: (res: any)=>{
        if(res.status){
          window.localStorage.setItem("isLogged", "true");
          window.localStorage.setItem("access_token", res.data.token);
          Utilities.redirect("/customers");
        }else{
  
          this.showErrorMessage();
        }  
      },
    })
  }

  public logout(){
    window.localStorage.clear();
  }

  public register(data: any){
    try{

      delete data.confirmPassword;

      Utilities.request(this.httpClient, "post", "/users", data)
      .subscribe({
        error: ()=>{
          this.showErrorMessage();
        },
        next: (res: any)=>{
          if(res.status){

            this.login(data);
          }else{
            this.showErrorMessage();
          }
        }
      });
    }catch(e){

      this.showErrorMessage();
    }
  }

  private showErrorMessage(message: string = "Algo deu errado, não foi possível realizar o cadastro"){

    const element = document.querySelectorAll(".notification")[0];

    element.classList.remove("hide");
    element.innerHTML = message;

    setTimeout(()=>{
      document.querySelectorAll(".notification")[0].classList.add("hide");
    }, 1000  * 10);
  }

}