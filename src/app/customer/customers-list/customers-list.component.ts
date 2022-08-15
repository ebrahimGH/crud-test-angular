import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../Dtos/Customer';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  providers:[CustomersService]
})
export class CustomersListComponent implements OnInit {
  customers$!: Observable<Customer[]>;
  totalItems:number = 0;
  loadingMore:boolean = false;
  constructor(private customersService:CustomersService) { }

  ngOnInit(): void {
    this.customers$ = of<Customer[]>( this.customersService.getCustomers())
    this.customers$.subscribe(data=>{
      this.totalItems = data.length; 
    })
  }
  onLoadMore(){
    console.log('loadmore')
    
  }

}
