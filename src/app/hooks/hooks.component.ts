import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit {

  @Input() max:number=50;
  text:string='';
  maxlimit:boolean=false;

  constructor() { }

  ngOnInit() {
  }

}
