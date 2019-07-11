import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpesanPage } from './detailpesan.page';

describe('DetailpesanPage', () => {
  let component: DetailpesanPage;
  let fixture: ComponentFixture<DetailpesanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailpesanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailpesanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
