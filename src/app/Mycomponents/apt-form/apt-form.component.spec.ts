import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AptFormComponent } from './apt-form.component';

describe('AptFormComponent', () => {
  let component: AptFormComponent;
  let fixture: ComponentFixture<AptFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AptFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AptFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
