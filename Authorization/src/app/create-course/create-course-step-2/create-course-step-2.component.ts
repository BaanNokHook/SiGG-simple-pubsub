import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
// import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';


@Component({
  selector: "create-course-step-2",
  templateUrl:"create-course-step-2.component.html",
  styleUrls: ["create-course-step-2.component.scss"]
})
export class CreateCourseStep2Component {

    form = this.fb.group({
      title: ['', [    
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60)
      ]],
      releasedAt: [new Date(1990,0,1), Validators.required],
      category: ['BEGINNER', Validators.required],
      courseType: ['premium', Validators.required],
    });
  
  

  
    constructor(private fb: FormBuilder) {
  
    }
  
    get courseTitle() {
      return this.form.controls['title'];
    }
  
  }