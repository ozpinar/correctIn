import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEntriesComponent } from './profile-entries.component';

describe('ProfileEntriesComponent', () => {
  let component: ProfileEntriesComponent;
  let fixture: ComponentFixture<ProfileEntriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEntriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
