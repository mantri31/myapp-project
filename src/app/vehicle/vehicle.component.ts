import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any=[];
  constructor(private _vehicleService:VehicleService){
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles=data;
      console.log(this.vehicles);
      }
      
    )
  }

  term:string="";

  filter(){
    this._vehicleService.getFilterdVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      }, (err:any)=>{
        alert("Interna Server Error")
      }
    )
  }

  column:string="";
  order:string="";

  sort(){
    this._vehicleService.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      }, (err:any)=>{
        alert("Interna Server Error")
      }
    )
  }

  limit:number=0;
  page:number=0;

  paginaton(){
    this._vehicleService.getPaginatedVehicles(this.limit,this.page).subscribe(
      (data:any)=>{
        this.vehicles=data;
        console.log(this.vehicles);
      }, (err:any)=>{
        alert("Interna Server Error")
      }
    )
  }

  delete(id:number){
    if(confirm("Are you sure to delete?")==true){
      this._vehicleService.deleteVehicles(id).subscribe(
        (data:any)=>{
          alert("Record Deleted Successfully");
          location.reload();
        }, (err:any)=>{
          alert("Enternal Server Error");
        }
      )
    }else{
      alert("You have cancelled!")
    }
  }
}
