import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSocialMediaComponent } from './list-social-media.component';

describe('ListSocialMediaComponent', () => {
  let component: ListSocialMediaComponent;
  let fixture: ComponentFixture<ListSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSocialMediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
