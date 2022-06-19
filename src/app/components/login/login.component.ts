import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  user:any;
  errorMessage = "";
  loading: boolean;

  constructor(private authService: AuthService, private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', Validators.required],
    })
  }

  login() {
    this.loading = true;
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        this.router.navigateByUrl('/home')
        this.loading = false;
      },
      (error) => {
        this.errorMessage = error?.error?.message ?? "";
        this.loading = false;
      });
    this.loginForm.reset();
  }
}
