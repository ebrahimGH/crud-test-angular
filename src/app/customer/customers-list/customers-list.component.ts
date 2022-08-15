import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
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
  constructor(private customersService:CustomersService, private nzMessageService:NzMessageService,private router:Router) { }

  ngOnInit(): void {
    this.loadCustomers();
  }
  loadCustomers(){
    this.customers$ = of<Customer[]>( this.customersService.getCustomers())
    this.customers$.subscribe(data=>{
      this.totalItems = data.length; 
    })
  }
  onLoadMore(){
    console.log('loadmore') 
  }

  deleteCustomer(customer:Customer){
    this.customersService.deleteCustomer(customer) 
    this.nzMessageService.success('Customer information has been removed successfully');
    this.loadCustomers()
  }
  addCustomer(event:any){
    this.router.navigate(['/New_Customer'])
  }

}
