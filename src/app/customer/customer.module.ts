import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerCardViewComponent } from './customer-card-view/customer-card-view.component'; 
import { SharedModule } from '../shared/shared.module';
import { CustomersService } from './services/customers.service';
import { NzMessageService } from 'ng-zorro-antd/message';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerFormComponent,
    CustomersListComponent,
    CustomerCardViewComponent, 
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule
  ],
  providers:[
    CustomersService,
    NzMessageService
  ]
})
export class CustomerModule { }
