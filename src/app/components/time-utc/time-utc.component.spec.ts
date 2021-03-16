import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeUtcComponent } from './time-utc.component';

describe('TimeUtcComponent', () => {
  let component: TimeUtcComponent;
  let fixture: ComponentFixture<TimeUtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeUtcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeUtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
