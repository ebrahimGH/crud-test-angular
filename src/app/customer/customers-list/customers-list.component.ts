import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../Dtos/Customer';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
  customers$!: Observable<Customer[]>;
  constructor() { }

  ngOnInit(): void {
    this.customers$ = of<Customer[]>([
      {
        Firstname: "Pasquale",
        Lastname: "Desaur",
        DateOfBirth: "11/20/2021",
        PhoneNumber: "455-179-4890",
        Email: "pdesaur3@imgur.com",
        BankAccountNumber: 2067
      },
      {
        Firstname: "Granville",
        Lastname: "McQuaid",
        DateOfBirth: "4/8/2022",
        PhoneNumber: "468-794-8491",
        Email: "gmcquaid0@boston.com",
        BankAccountNumber: 51609
      },
      {
        Firstname: "Urbain",
        Lastname: "Klamman",
        DateOfBirth: "5/6/2022",
        PhoneNumber: "271-533-1426",
        Email: "uklamman1@economist.com",
        BankAccountNumber: 55852
      },
      {
        Firstname: "Faber",
        Lastname: "Nunn",
        DateOfBirth: "4/9/2022",
        PhoneNumber: "206-403-6955",
        Email: "fnunn2@shutterfly.com",
        BankAccountNumber: 20514
      },
      {
        Firstname: "Giustino",
        Lastname: "Haycock",
        DateOfBirth: "8/11/2022",
        PhoneNumber: "727-534-6363",
        Email: "ghaycock4@umn.edu",
        BankAccountNumber: 8480
      }
    ])
  }

}
