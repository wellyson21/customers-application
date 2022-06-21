import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public userData: FormGroup = (()=>{
    return this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.email],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    });
  })();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {  }

  public onRegister(){

    const data = this.userData.value;

    if(data.password != data.confirmPassword){

      document.querySelectorAll(".notification")[0].classList.remove("hide");
      setTimeout(()=>{
        document.querySelectorAll(".notification")[0].classList.add("hide");
      }, 1000  * 10);

      return;
    }

    this.authService.register(data);
  }

}
