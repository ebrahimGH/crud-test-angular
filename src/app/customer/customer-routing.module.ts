import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerComponent } from './customer.component';
import { CustomersListComponent } from './customers-list/customers-list.component';

const routes: Routes = [
  {
    path:'',
    component:CustomerComponent,   
    children:[
      { path: '', redirectTo: '/Customers', pathMatch: 'full' },

      {
        path:'Customers',
        component:CustomersListComponent
      },
      {
        path:'New_Customer',
        component:CustomerFormComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
