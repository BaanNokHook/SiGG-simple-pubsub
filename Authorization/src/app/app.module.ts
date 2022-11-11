import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {CoursesService} from "./services/courses.service";
import {HttpClientModule} from "@angular/common/http";
import {CourseResolver} from "./services/course.resolver";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {CreateCourseComponent} from './create-course/create-course.component';
import {MatStepperModule} from '@angular/material/stepper';
import {CreateCourseStep1Component} from './create-course/create-course-step-1/create-course-step-1.component';
import {CreateCourseStep2Component} from './create-course/create-course-step-2/create-course-step-2.component';
import {CreateCourseStep3Component} from './create-course/create-course-step-3/create-course-step-3.component';
import {CreateCourseStep4Component} from './create-course/create-course-step-4/create-course-step-4.component';
import {CreateCourseStep5Component} from './create-course/create-course-step-5/create-course-step-5.component';
import {CreateCourseStep6Component} from './create-course/create-course-step-6/create-course-step-6.component';
import {CreateCourseStep7Component} from './create-course/create-course-step-7/create-course-step-7.component';
import {CreateCourseStep8Component} from './create-course/create-course-step-8/create-course-step-8.component';
import {CreateCourseStep9Component} from './create-course/create-course-step-9/create-course-step-9.component';
import {CreateCourseStep10Component} from './create-course/create-course-step-10/create-course-step-10.component';
import {CreateCourseStep11Component} from './create-course/create-course-step-11/create-course-step-11.component';
import {CreateCourseStep12Component} from './create-course/create-course-step-12/create-course-step-12.component';
import {CreateCourseStep13Component} from './create-course/create-course-step-13/create-course-step-13.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {mnemonicComponent} from './mnemonic/mnemonic.component';
import {wallet001Component} from './wallet001/wallet001.component';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        CreateCourseComponent,
        CreateCourseStep1Component,
        CreateCourseStep2Component,
        CreateCourseStep3Component,
        CreateCourseStep4Component,
        CreateCourseStep5Component,
        CreateCourseStep6Component,
        CreateCourseStep7Component,
        CreateCourseStep8Component,
        CreateCourseStep9Component,
        CreateCourseStep10Component,
        CreateCourseStep11Component,
        CreateCourseStep12Component,
        CreateCourseStep13Component,
        mnemonicComponent,
        wallet001Component,


    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatTooltipModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatDialogModule,
        AppRoutingModule,
        MatSelectModule,
        MatCheckboxModule,
        DragDropModule,
        MatRadioModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatTreeModule,
        ScrollingModule
    ],
    providers: [
        CoursesService,
        CourseResolver
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
