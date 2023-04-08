import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonShapeComponent } from './ribbon-shape.component';

describe('RibbonShapeComponent', () => {
  let component: RibbonShapeComponent;
  let fixture: ComponentFixture<RibbonShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RibbonShapeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RibbonShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
