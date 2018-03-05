import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component401Component } from './component401.component';

describe('Component401Component', () => {
  let component: Component401Component;
  let fixture: ComponentFixture<Component401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
