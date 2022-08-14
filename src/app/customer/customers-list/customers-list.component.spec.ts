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
  // it('should show customer info', () => { 
  //   fixture = TestBed.createComponent(CustomersListComponent);
  //   component = fixture.componentInstance;
  //   const customer = fixture.nativeElement.querySelector('[data-test="customer-info"]')
  //   expect(customer.querySelector('[data-test="Firstname"]').innerText).toEqual('Pasquale')
  //   expect(customer.querySelector('[data-test="Lastname"]').innerText).toEqual('Desaur')
  //   expect(customer.querySelector('[data-test="DateOfBirth"]').innerText).toEqual('11/20/2021')
  //   expect(customer.querySelector('[data-test="PhoneNumber"]').innerText).toEqual('455-179-4890')
  //   expect(customer.querySelector('[data-test="Email"]').innerText).toEqual('pdesaur3@imgur.com')
  //   expect(customer.querySelector('[data-test="BankAccountNumber"]').innerText).toEqual(2067)
  // });
});
