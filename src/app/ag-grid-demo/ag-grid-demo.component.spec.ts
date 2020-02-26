import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDemoComponent } from './ag-grid-demo.component';

describe('AgGridDemoComponent', () => {
  let component: AgGridDemoComponent;
  let fixture: ComponentFixture<AgGridDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
