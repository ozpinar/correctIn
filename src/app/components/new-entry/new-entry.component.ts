import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent implements OnInit {

  entryForm: FormGroup;
  constructor(private fb: FormBuilder, private postService: PostService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.entryForm = this.fb.group({
      text: ['', [Validators.required, Validators.maxLength(280)]]
    });
  }

  postEntry() {
    console.log(this.entryForm.value)
    this.postService.createPost(this.entryForm.value).subscribe(() => {});
  }
}
