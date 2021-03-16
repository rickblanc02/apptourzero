import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTutenComponent } from './login-tuten.component';

describe('LoginTutenComponent', () => {
  let component: LoginTutenComponent;
  let fixture: ComponentFixture<LoginTutenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTutenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTutenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
