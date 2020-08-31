import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBookComponent } from './story-book.component';

describe('StoryBookComponent', () => {
  let component: StoryBookComponent;
  let fixture: ComponentFixture<StoryBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
