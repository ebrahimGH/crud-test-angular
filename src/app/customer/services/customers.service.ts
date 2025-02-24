import { Injectable } from '@angular/core';
import { Customer } from '../Dtos/Customer';
import { InitCustomers } from './init-customers';
import * as _ from "lodash"
import * as moment from "moment"
import { delay, of } from 'rxjs';
import { result } from 'lodash';
@Injectable()
export class CustomersService extends InitCustomers {

   constructor() {
      super();
      console.log('CustomerService Works');
      this.load();
   }

   getCustomers() {
      let customers: Customer[] = JSON.parse(localStorage.getItem('customers') ?? '');
      return customers;
   }

   addCustomer(customer: Customer) {
      let customers = JSON.parse(localStorage.getItem('customers') ?? '');
      // Add New CustomerService
      customers.push(customer);
      // Set New Customers
      localStorage.setItem('customers', JSON.stringify(customers));
   }

   deleteCustomer(customer: Customer) {
      let customers = JSON.parse(localStorage.getItem('customers') ?? '');

      for (let i = 0; i < customers.length; i++) { 
         if (customers[i].BankAccountNumber == +customer.BankAccountNumber) {
            customers.splice(i, 1);
            break;
         }
      } 
      localStorage.setItem('customers', JSON.stringify(customers));
   }

   updateCustomer(customer: Customer, updatedCustomer:Customer) {
      this.deleteCustomer(customer)
      this.addCustomer(updatedCustomer) 
   }
   

   getCustomer(field: string, searchText: any) {
      let customers = JSON.parse(localStorage.getItem('customers') ?? ''); 
      return of(_.find(customers, [field, searchText])).pipe(
         delay(1000))
   }
   customerExist(info:any) {
      let customers = JSON.parse(localStorage.getItem('customers') ?? '');
      console.log(info)
      return of(_.find(customers,(customer)=>{
         var result = info.Firstname === customer.Firstname && info.Lastname === customer.Lastname && moment(info.DateOfBirth).format("YYYY-MM-DD").toString() === moment(customer.DateOfBirth).format("YYYY-MM-DD").toString()
         console.log(result)
         return  result
      })).pipe(
         delay(1000))
   }
}