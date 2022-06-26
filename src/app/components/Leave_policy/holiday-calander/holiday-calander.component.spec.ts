import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCalanderComponent } from './holiday-calander.component';

describe('HolidayCalanderComponent', () => {
  let component: HolidayCalanderComponent;
  let fixture: ComponentFixture<HolidayCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayCalanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
