import { Component } from '@angular/core';
import {Student} from '.././Student.model';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  @Output() newItemEvent = new EventEmitter<Student>();
  studentNew: Student = new Student("", "", 0);

  
  onSubmit(input:any) {
    // let studentAdd: Student = new Student(this.studentNew.name, this.studentNew.registerNumber, this.studentNew.age);
  
    this.newItemEvent.emit(this.studentNew);
  };

}