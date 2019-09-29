import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";


import { AuthService } from  '../services/auth.service';
import { UserService } from  '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public isSubmitted  =  false;
  public loading = false;
  public error=false;

  constructor(private authService: AuthService, 
    private router: Router, 
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private userService: UserService ) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      gitUsername: ['', Validators.required],
      gitPassword: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }

  login(){
    
    this.spinner.show();
    
    this.authService.login(this.loginForm.value.gitUsername, this.loginForm.value.gitPassword)
    .subscribe((res) => {
      this.spinner.hide();
      this.userService.setAuthUser(res);
      this.router.navigateByUrl('/home');
  },
  error => {
    this.spinner.hide();
    this.error=true;
  } 
  );
   
  }


}
