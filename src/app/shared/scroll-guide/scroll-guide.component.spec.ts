import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollGuideComponent } from './scroll-guide.component';

describe('ScrollGuideComponent', () => {
  let component: ScrollGuideComponent;
  let fixture: ComponentFixture<ScrollGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
