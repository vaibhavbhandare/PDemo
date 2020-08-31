import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidFormComponent } from './covid-form.component';

describe('CovidFormComponent', () => {
  let component: CovidFormComponent;
  let fixture: ComponentFixture<CovidFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
