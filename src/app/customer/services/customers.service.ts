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

   deleteCustomer(customerId: number) {
      let customers = JSON.parse(localStorage.getItem('customers') ?? '');

      for (let i = 0; i < customers.length; i++) {
         if (customers[i].text == customerId) {
            customers.splice(i, 1);
         }
      }
      // Set New Customers
      localStorage.setItem('customers', JSON.stringify(customers));
   }

   updateCustomer(customer: Customer) {
      let customers = JSON.parse(localStorage.getItem('customers') ?? '');

      // Set New Customers
      localStorage.setItem('customers', JSON.stringify(customers));
   }

   infoExist(field: string, searchText: any) {
      let customers = JSON.parse(localStorage.getItem('customers') ?? '');
      if(!isNaN(+searchText)){
         searchText =+searchText
      }
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