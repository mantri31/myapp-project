import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  name:string="venkatesh";
  age:number=30;
  email:string="venkatesh291991@gmail.com";

  isIndian:boolean=true;

  phone:string="+91"

  num1:number=0;
  num2:number=0;
  result:number=0;

  sum(){
    this.result=this.num1+this.num2;
    console.log(this.result);
  }

  //user:any={//
   // name:"venkatesh",//
   // age:30,//
   // email:"venkatesh291991@gmail.com",//
  //}//

  submit(){
    alert("clicked submit button")
  }
  typing(){
    alert("Typing.......")
  }

}
