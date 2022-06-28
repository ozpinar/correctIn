import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from 'src/app/services/language.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  updateForm: FormGroup
  passwordForm: FormGroup
  user: any
  languages: any;
  constructor(private authService: AuthService, private fb: FormBuilder, private languageService: LanguageService, private userService: UserService) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => this.user = user);
    this.initializeForm();
    this.initializePasswordForm();
    this.getLanguages();
  }

  getLanguages() {
    this.languageService.getLanguages().subscribe(res => this.languages = res)
  }

  initializeForm() {
    this.updateForm = this.fb.group({
      name: [this.user.firstName],
      surname: [this.user.lastName],
      email: [this.user.email],
      native: [this.user.nativeLanguage.id, Validators.required],
      target: [this.user.foreignLanguage.id, Validators.required]})
  }

  initializePasswordForm() {
    this.passwordForm = this.fb.group({
      email: [this.user.email],
      oldPassword: [],
      newPassword: [],
    })
  }

  updateInfos() {
    this.userService.updateUser(this.user.id, this.updateForm.value).subscribe();
  }

  changePassword() {
    this.authService.updatePassword(this.passwordForm.value).subscribe();
    this.passwordForm.reset();
  }
}
