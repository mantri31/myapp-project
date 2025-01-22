import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {
  imdb:any=[];
  constructor(private _imdbServIce:ImdbService){
    _imdbServIce.getImdb().subscribe(
      (data:any)=>{
        this.imdb=data;
        console.log(this.imdb);
      }
    )
  }


}
