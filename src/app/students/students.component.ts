import { Component } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
  students:any=[];
  constructor(private _studentsService:StudentsService) {
    _studentsService.getStudents().subscribe(
      (data:any)=>{
        this.students=data;
        console.log(this.students);
      }
    )
  }

}
