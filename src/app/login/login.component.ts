import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup= new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  constructor(private _loginService:LoginService, private _router:Router) { }

  login(){
    console.log(this.loginForm.value);
    this._loginService.login(this.loginForm.value).subscribe(
      (data:any)=>{
        console.log(data);
        alert("login Successfully!");
        sessionStorage.setItem('token', data.token)
        this._router.navigateByUrl("/myapp-project") 
      },(err:any)=>{
        alert("Inv")
      }
    )
  }

  ngOnInit() {
  }

}
