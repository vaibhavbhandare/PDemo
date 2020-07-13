import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridTreeComponent } from './ag-grid-tree.component';

describe('AgGridTreeComponent', () => {
  let component: AgGridTreeComponent;
  let fixture: ComponentFixture<AgGridTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgGridTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
