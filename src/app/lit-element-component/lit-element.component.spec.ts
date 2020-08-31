import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitElementComponent } from './lit-element.component';

describe('LitElementComponent', () => {
  let component: LitElementComponent;
  let fixture: ComponentFixture<LitElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
