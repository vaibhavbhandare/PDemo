import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaharashtraReportComponent } from './maharashtra-report.component';

describe('MaharashtraReportComponent', () => {
  let component: MaharashtraReportComponent;
  let fixture: ComponentFixture<MaharashtraReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaharashtraReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaharashtraReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
