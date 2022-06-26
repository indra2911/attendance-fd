import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandanceInfoComponent } from './attandance-info.component';

describe('AttandanceInfoComponent', () => {
  let component: AttandanceInfoComponent;
  let fixture: ComponentFixture<AttandanceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttandanceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttandanceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
