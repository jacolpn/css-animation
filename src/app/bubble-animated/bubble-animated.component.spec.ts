import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleAnimatedComponent } from './bubble-animated.component';

describe('BubbleAnimatedComponent', () => {
  let component: BubbleAnimatedComponent;
  let fixture: ComponentFixture<BubbleAnimatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleAnimatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
