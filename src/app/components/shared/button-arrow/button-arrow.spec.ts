import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonArrow } from './button-arrow';

describe('ButtonArrow', () => {
  let component: ButtonArrow;
  let fixture: ComponentFixture<ButtonArrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonArrow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonArrow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
