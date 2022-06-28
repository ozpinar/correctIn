import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {
  @Input() id: any;
  @Input() text = "";
  @Input() user: any;
  @Input() date: any;
  @Input() language: any;

  currentUser: any;
  isDeleting = false;
  isEditing = false;
  comment = "";
  originalText = "";
  isSelf = false;
  
  constructor(private authService: AuthService, private postService: PostService) { }
  
  ngOnInit(): void {
    this.authService.currentUser$.subscribe(res => this.currentUser = res);
    this.originalText = this.text;
    this.date = new Date(this.date);
    if (this.user.id == this.currentUser.id) {
      this.isSelf = true;
    }
  }

  toggleEditing() {
    if (this.isEditing) {
      this.postService.checkPost(this.id, this.text, this.comment).subscribe(res => {
        this.postService.deletePost(this.id).subscribe(() => {});
      });
    }
    this.isEditing = !this.isEditing
  }

  toggleDelete() {
    this.isDeleting = !this.isDeleting;
  }

  confirmDelete() {
    this.isDeleting = false;
    this.postService.deletePost(this.id).subscribe();
  }

  cancel() {
    this.isEditing = false;
    this.text = this.originalText;
    this.comment = "";
  }

}
