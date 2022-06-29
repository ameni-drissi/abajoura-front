import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: any = FormGroup

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService,
  ) {
    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),

    }
    this.loginForm = this.fb.group(formControls)
  }
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }


  ngOnInit(): void {}
  
  login() {
  
   let data = this.loginForm.value;

    let user = new User(undefined,undefined,data.email,data.password);
    
    this.userService.loginAdmin(user).subscribe(
      res=>{
        let token = res.token;
        localStorage.setItem("myToken",token);
        this.router.navigate(['/'])
        
      },
      err=>{
        console.log(err);
      }
    )

  }

}
