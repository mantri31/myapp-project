import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
  id:number=0;
constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService,private _router:Router){
  // capturing id with activated route
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      // integrating API
      _vehicleService.getVehicle(data.id).subscribe(
        (data:any)=>{
          console.log(data);
          //display the data in form
          this.vehicleForm.patchValue(data);
        }
      )
    }
  )
}



public vehicleForm:FormGroup= new FormGroup(
  {
  Vehicle:new FormControl(),
  manufacturer:new FormControl(),
  model:new FormControl(),
  type:new FormControl(),
  fuel:new FormControl(),
  color:new FormControl(),
  image:new FormControl(),
  cost:new FormControl(),
  }
)

submit(){
  // update vehicle
  if(this.id){
    this._vehicleService.updateVehicle(this.id,this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert("Updated Successfully!");
        this._router.navigateByUrl("/myapp-project/vehicle");
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
    // create vehicle
  }else{
    // console.log(this.vehicleForm.value);
  this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("Vehicle create successfully");
      // this._router.navigate(["/vehicle"]);
      this._router.navigateByUrl("/myapp-project/vehicle");
    },(err:any)=>{
      alert("internal Server Error");
    }
  )
}

  }
  
}
