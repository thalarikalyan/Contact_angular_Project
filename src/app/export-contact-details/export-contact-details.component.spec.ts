import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportContactDetailsComponent } from './export-contact-details.component';

describe('ExportContactDetailsComponent', () => {
  let component: ExportContactDetailsComponent;
  let fixture: ComponentFixture<ExportContactDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExportContactDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExportContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
