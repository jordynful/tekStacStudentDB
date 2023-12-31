import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';
import { FormGroup, FormBuilder } from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }