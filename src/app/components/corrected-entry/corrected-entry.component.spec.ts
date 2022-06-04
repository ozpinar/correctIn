import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectedEntryComponent } from './corrected-entry.component';

describe('CorrectedEntryComponent', () => {
  let component: CorrectedEntryComponent;
  let fixture: ComponentFixture<CorrectedEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectedEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectedEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
