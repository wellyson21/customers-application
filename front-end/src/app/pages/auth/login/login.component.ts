import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userData: FormGroup = (()=>{
    return this.formBuilder.group({
      email: ["", Validators.email],
      password: ["", Validators.required],
    });
  })();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public onLogin(event: Event){

    event.preventDefault();

    if(this.userData.invalid){ return; }

    this.authService.login(this.userData.value);
  }

}
