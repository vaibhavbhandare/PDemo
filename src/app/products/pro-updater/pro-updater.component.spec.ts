import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProUpdaterComponent } from './pro-updater.component';

describe('ProUpdaterComponent', () => {
  let component: ProUpdaterComponent;
  let fixture: ComponentFixture<ProUpdaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProUpdaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
