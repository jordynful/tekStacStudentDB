import { Component } from '@angular/core';
//IMPORT STUDENT MODEL CLASS
import {Student} from './Student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  studentNew: Student =new Student("","",0);
  firstStudent: Student = new Student("Sam","RS200",21);
  secondStudent: Student = new Student("John", "ST001", 22);
  fourthStudent: Student = new Student("Angel", "AN021", 20);
  student: Student[] =[this.firstStudent, this.secondStudent, this.fourthStudent];

  //Assign the Student details to the variable student which is type Student[].
  title = 'Student-db';

  delete(index: number) {

    this.student.splice(index, 1);
  };



  addItem(newItem: Student) {
    this.student.push(newItem);
  }

}
