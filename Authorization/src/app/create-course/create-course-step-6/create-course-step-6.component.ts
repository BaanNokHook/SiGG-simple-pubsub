import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

const SAMPLE_TEXT= "d48b9240-b832-46e1-9bdf-4845336d793f";



@Component({
  selector: "create-course-step-6",
  templateUrl:"create-course-step-6.component.html",
  styleUrls: ["create-course-step-6.component.scss"]
})
export class CreateCourseStep6Component {

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
    