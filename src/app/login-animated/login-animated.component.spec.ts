import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAnimatedComponent } from './login-animated.component';

describe('LoginAnimatedComponent', () => {
  let component: LoginAnimatedComponent;
  let fixture: ComponentFixture<LoginAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAnimatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
