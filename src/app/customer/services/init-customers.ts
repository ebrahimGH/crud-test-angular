import { Customer } from "../Dtos/Customer";

export class InitCustomers {
    load() {
      if(localStorage.getItem('customers') === null || localStorage.getItem('customers') == undefined) {
        console.log('No Customers Found... Creating...');
        let customers:Customer[] = [
            {
              Firstname: "Pasquale",
              Lastname: "Desaur",
              DateOfBirth: "2021-11-20",
              PhoneNumber: "455-179-4890",
              Email: "pdesaur3@imgur.com",
              BankAccountNumber: '20674'
            },
            {
              Firstname: "Granville",
              Lastname: "McQuaid",
              DateOfBirth: "2022-4-8",
              PhoneNumber: "468-794-8491",
              Email: "gmcquaid0@boston.com",
              BankAccountNumber: '51609'
            },
            {
              Firstname: "Urbain",
              Lastname: "Klamman",
              DateOfBirth: "2022-5-6",
              PhoneNumber: "271-533-1426",
              Email: "uklamman1@economist.com",
              BankAccountNumber: '55852'
            }, 
          ];
  
        localStorage.setItem('customers', JSON.stringify(customers));
        return 
      } else {
        console.log('Found Customers...');
      }
    }
  }