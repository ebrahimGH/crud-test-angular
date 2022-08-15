import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersListComponent } from './customers-list.component';

describe('CustomersListComponent', () => {
  let component: CustomersListComponent;
  let fixture: ComponentFixture<CustomersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CustomersListComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });  

  it('should be visible', ()=>{
    fixture = TestBed.createComponent(CustomersListComponent);
    component = fixture.componentInstance;
    const loadMoreButton = fixture.nativeElement.querySelector('[data-test="load-more-button"]')
    expect(loadMoreButton).toBeTruthy();
  })

  it('should show scroll guide', ()=>{
    fixture = TestBed.createComponent(CustomersListComponent);
    component = fixture.componentInstance;
    component.totalItems = 3;
    fixture.detectChanges()
    const scrollGuide = fixture.nativeElement.querySelector('[data-test="scroll-guide"]')
    expect(component.totalItems).toBeGreaterThanOrEqual(3)
    expect(scrollGuide).toBeTruthy();
  }) 
});
