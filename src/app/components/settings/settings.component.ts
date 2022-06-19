import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  updateForm: FormGroup
  user: any
  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => this.user = user);
    this.initializeForm();
  }

  initializeForm() {
    this.updateForm = this.fb.group({
      name: [this.user.firstName],
      surname: [this.user.lastName],
      email: [this.user.email],
    })
  }

}
