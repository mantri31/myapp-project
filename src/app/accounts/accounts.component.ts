import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  accounts:any=[];
  constructor(private _accountService:AccountsService){
    _accountService.getAccount().subscribe(
      (data:any)=>{
        this.accounts=data;
        console.log(this.accounts);
      }
    )
  }


}
