import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';

const SAMPLE_TEXT= "d48b9240-b832-46e1-9bdf-4845336d793f";


@Component({
  selector: "create-course-step-1",
  templateUrl:"create-course-step-1.component.html",
  styleUrls: ["create-course-step-1.component.scss"]
})
export class CreateCourseStep1Component {

  form = this.fb.group({
    title: ['', [    
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(1990,0,1), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SAMPLE_TEXT, [Validators.required, Validators.minLength(3)]]
  });

  public show:boolean = false;
  public buttonName:any = 'Genarate Address';
  public id:any = 'id1';
  document: any;
  Math: any;


  ngOnInit () {  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide"; 
    else
      this.buttonName = "Show";      
  }


  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {

      const date = cellDate.getDate();

      if (view == 'month') {
          return (date == 1) ? 'highlight-date' : "";
      }

      return "";
  }

  constructor(private fb: FormBuilder) {

  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}




