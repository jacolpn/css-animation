import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxShadowComponent } from './box-shadow.component';

describe('BoxShadowComponent', () => {
  let component: BoxShadowComponent;
  let fixture: ComponentFixture<BoxShadowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxShadowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
