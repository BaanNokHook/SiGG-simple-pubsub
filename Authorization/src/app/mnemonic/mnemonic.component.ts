import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'mnemonic',
  templateUrl: './mnemonic.component.html',
  styleUrls: ['./mnemonic.component.scss']
})
export class mnemonicComponent implements OnInit {
  loginForm: FormGroup | any;
  title = 'material-login';

  
  constructor(
    private router:Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        // '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
        'Validate#@outlook.io',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        // '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'   
        'BaanNokHookDynamics#@@@!!11reFreShInR5cCI6IkpXV'
      )])
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    localStorage.setItem('user',this.loginForm.value)
    this.router.navigate(['/about'])
  }
}




