import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  languages = [
    {id: 1, name: "English"},
    {id: 2, name: "Spanish"},
    {id: 3, name: "French"},
    {id: 4, name: "Portuguese"},
    {id: 5, name: "Turkish"},
    {id: 6, name: "Italian"},
    {id: 7, name: "Polish"},
    {id: 8, name: "Romanian"},
  ];

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
  }

  changeNative(e: any) {
    this.registerForm.get('native')?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeTarget(e: any) {
    this.registerForm.get('target')?.setValue(e.target.value, {
      onlySelf: true,
    });
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
    this.registerForm.reset();
    // this.authService.register(this.registerForm.value).subscribe(token => console.log(token));
  }
}
