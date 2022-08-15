import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTopComponent } from './back-to-top.component';

describe('BackToTopComponent', () => {
  let component: BackToTopComponent;
  let fixture: ComponentFixture<BackToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide if target div not intialized', ()=>{
    fixture = TestBed.createComponent(BackToTopComponent);
    component = fixture.componentInstance;
    component.divTarget = null;
    fixture.detectChanges();
    const backToTop = fixture.nativeElement.querySelector('[data-test="back-to-top"]')
    expect(component.divTarget).toBeNull()
    expect(backToTop).toBeNull()
  })

});
