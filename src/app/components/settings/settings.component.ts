import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  updateForm: FormGroup
  user: any
  languages: any;
  constructor(private authService: AuthService, private fb: FormBuilder, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => this.user = user);
    this.initializeForm();
    this.getLanguages();
    console.log(this.user)
  }

  getLanguages() {
    this.languageService.getLanguages().subscribe(res => this.languages = res)
  }

  initializeForm() {
    this.updateForm = this.fb.group({
      name: [this.user.firstName],
      surname: [this.user.lastName],
      email: [this.user.email],
    })
  }

}
