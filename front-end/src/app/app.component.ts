import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Utilities } from './@shared/utilities/utilities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'customers-app';

  constructor(
    private httCllient: HttpClient
  ){
    this.refreshToken();
  }

  private refreshToken(){
    setInterval(()=>{
      if(Utilities.isLogged){
        Utilities.request(this.httCllient, "post", "/users/refreshtoken").subscribe((res: any)=>{
          if(res.status){
            window.localStorage.setItem("access_token", res.token)
          }
        });
      }
    }, 1000 * 60 * 5);
  }
}
