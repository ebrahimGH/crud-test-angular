import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HeaderComponent); 
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("[data-test='title']")?.textContent).toContain('Crud Test Angular');
  });

  it('should render navbar links', () => {
    const fixture = TestBed.createComponent(HeaderComponent); 
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('[data-test="nav-link"]')
    expect(navLinks.length).toBe(2)
  });
});
