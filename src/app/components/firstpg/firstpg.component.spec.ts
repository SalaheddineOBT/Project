import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpgComponent } from './firstpg.component';

describe('FirstpgComponent', () => {
  let component: FirstpgComponent;
  let fixture: ComponentFixture<FirstpgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstpgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
