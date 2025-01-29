import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myapp-project',
  templateUrl: './myapp-project.component.html',
  styleUrls: ['./myapp-project.component.css']
})
export class MyappProjectComponent {

  constructor(private _router:Router){}

  logout(){
    sessionStorage.removeItem('token');
    alert("Logout Successfully!");
    this._router.navigateByUrl("/login");
  }

}
