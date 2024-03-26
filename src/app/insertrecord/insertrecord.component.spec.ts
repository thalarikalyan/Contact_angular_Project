import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertrecordComponent } from './insertrecord.component';

describe('InsertrecordComponent', () => {
  let component: InsertrecordComponent;
  let fixture: ComponentFixture<InsertrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertrecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
