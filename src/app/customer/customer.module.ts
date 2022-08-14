import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerCardViewComponent } from './customer-card-view/customer-card-view.component'; 


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormComponent,
    CustomersListComponent,
    CustomerCardViewComponent, 
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
