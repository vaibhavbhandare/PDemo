import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablechildComponent } from './observablechild.component';

describe('ObservablechildComponent', () => {
  let component: ObservablechildComponent;
  let fixture: ComponentFixture<ObservablechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservablechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservablechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
