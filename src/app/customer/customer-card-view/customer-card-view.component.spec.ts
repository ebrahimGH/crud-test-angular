import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from "jasmine-es6-spies";

import { CustomerCardViewComponent } from './customer-card-view.component';

describe('CustomerCardViewComponent', () => {
  let component: CustomerCardViewComponent;
  let fixture: ComponentFixture<CustomerCardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerCardViewComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CustomerCardViewComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should initialized', () => {
    fixture = TestBed.createComponent(CustomerCardViewComponent);
    component = fixture.componentInstance;
    component.customer = {
      Firstname: "Pasquale",
      Lastname: "Desaur",
      DateOfBirth: "11/20/2021",
      PhoneNumber: "455-179-4890",
      Email: "pdesaur3@imgur.com",
      BankAccountNumber: 2067
    }
    expect(component.customer).toBeDefined();
  });

  it('should show customer info', () => {
    fixture = TestBed.createComponent(CustomerCardViewComponent);
    component = fixture.componentInstance; 
    component.customer = {
      Firstname: "Pasquale",
      Lastname: "Desaur",
      DateOfBirth: "11/20/2021",
      PhoneNumber: "455-179-4890",
      Email: "pdesaur3@imgur.com",
      BankAccountNumber: 2067
    }
    fixture.detectChanges()
    const customer = fixture.nativeElement.querySelector('[data-test="customer-info"]')
    expect(customer.querySelector('[data-test="Fullname"]').innerText).toEqual('Pasquale Desaur') 
    expect(customer.querySelector('[data-test="DateOfBirth"]').innerText).toEqual('11/20/2021')
    expect(customer.querySelector('[data-test="PhoneNumber"]').innerText).toEqual('455-179-4890')
    expect(customer.querySelector('[data-test="Email"]').innerText).toEqual('pdesaur3@imgur.com')
    expect(customer.querySelector('[data-test="BankAccountNumber"]').innerText).toEqual('2067')
  });
  it('should\'t display customer card view if its data not intialized', ()=>{
    fixture = TestBed.createComponent(CustomerCardViewComponent);
    component = fixture.componentInstance; 
    component.customer = undefined
    fixture.detectChanges()
    const customer = fixture.nativeElement.querySelector('[data-test="customer-info"]')
    expect(customer).toBeNull()
  })
});
