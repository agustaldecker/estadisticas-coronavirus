import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCurveComponent } from './country-curve.component';

describe('CountryCurveComponent', () => {
  let component: CountryCurveComponent;
  let fixture: ComponentFixture<CountryCurveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCurveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
