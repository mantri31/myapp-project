import { Component, Input } from '@angular/core';
import { CommonService } from '../common.service';
import { max } from 'rxjs';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {
  @Input()max:number=0;
  text:string='';
  textCount:number=0;

  onTextChange(event:any){
    this.textCount=this.text.length;
    if(this.textCount == this.max){
      alert('You have reached maximum characters')
    }else{
      return;
    }
  }
  // constructor(private _commonService:CommonService){}

  // send(){
  //   this._commonService.countSub.next(this.count);
  // }

}
