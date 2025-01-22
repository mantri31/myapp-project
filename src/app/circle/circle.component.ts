import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  b:number=0;
  result:number=0;
  CircleArea(){
    this.result=3.14*this.b*this.b;

  }
  CirclePerimeter(){
    this.result=2*3.14*this.b;
  }
}
