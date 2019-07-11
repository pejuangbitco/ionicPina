import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailformPage } from './detailform.page';

describe('DetailformPage', () => {
  let component: DetailformPage;
  let fixture: ComponentFixture<DetailformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailformPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
