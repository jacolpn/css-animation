import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRollComponent } from './text-roll.component';

describe('TextRollComponent', () => {
  let component: TextRollComponent;
  let fixture: ComponentFixture<TextRollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextRollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
