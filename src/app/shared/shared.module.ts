import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ 
  
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    RouterModule
  ]
})
export class SharedModule { }
