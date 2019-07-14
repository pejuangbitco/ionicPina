import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputformPage } from './inputform.page';

describe('InputformPage', () => {
  let component: InputformPage;
  let fixture: ComponentFixture<InputformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputformPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
