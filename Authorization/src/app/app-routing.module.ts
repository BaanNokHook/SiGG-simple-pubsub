import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {CreateCourseComponent} from './create-course/create-course.component';
import {mnemonicComponent } from './mnemonic/mnemonic.component';
import {wallet001Component } from './wallet001/wallet001.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {
        path: "about",
        component: AboutComponent
    },
  {
    path: 'add-new-course',
    component: CreateCourseComponent
  },
  {
    path: 'mnemonic',
    component: mnemonicComponent
  },
  {
    path: 'wallet001',
    component: wallet001Component
  },

    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
