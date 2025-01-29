/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HooksComponent } from './hooks.component';

describe('HooksComponent', () => {
  let component: HooksComponent;
  let fixture: ComponentFixture<HooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
