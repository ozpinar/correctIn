import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder, private languageService: LanguageService, private router: Router) { }
  message: any;
  languages:any;

  initializeForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required], 
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]],
      native: ['', Validators.required],
      target: ['', [Validators.required, this.differentValues('native')]],
    })
    this.registerForm.controls['password'].valueChanges.subscribe(() => {
      this.registerForm.controls['confirmPassword'].updateValueAndValidity();
    })
    this.registerForm.controls['native'].valueChanges.subscribe(() => {
      this.registerForm.controls['target'].updateValueAndValidity();
    })
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getLanguages();
    localStorage.clear();
  }

  getLanguages() {
    this.languageService.getLanguages().subscribe((res:any) => this.languages = res)
  }

  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl | any) => {
      return control?.value === control?.parent?.controls[matchTo].value ? null : { isMatching: true }
    }
  }

  differentValues(matchTo: any): ValidatorFn {
    return (control: AbstractControl | any) => {
      return control?.value !== control?.parent?.controls[matchTo].value
        ? null : { isDifferent: true }
    }
  }

  register() {
    this.authService.register(this.registerForm.value).subscribe(() => this.message = "You have been registered successfully.");
    this.registerForm.reset();
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 1000);
  }
}
