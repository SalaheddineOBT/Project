import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarAlertComponent } from './car-alert.component';

describe('CarAlertComponent', () => {
  let component: CarAlertComponent;
  let fixture: ComponentFixture<CarAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
