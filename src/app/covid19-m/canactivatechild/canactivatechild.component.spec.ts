import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanactivatechildComponent } from './canactivatechild.component';

describe('CanactivatechildComponent', () => {
  let component: CanactivatechildComponent;
  let fixture: ComponentFixture<CanactivatechildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanactivatechildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanactivatechildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
