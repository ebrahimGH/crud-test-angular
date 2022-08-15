import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ScrollGuideComponent } from './scroll-guide/scroll-guide.component';
import { BackToTopComponent } from './back-to-top/back-to-top.component';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NoDataComponent } from './no-data/no-data.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';



@NgModule({
  declarations: [ 
    HeaderComponent,
    ScrollGuideComponent,
    BackToTopComponent,
    NoDataComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzEmptyModule,
    NzButtonModule,
    NzBackTopModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzCardModule,
    NzSkeletonModule,
    NzIconModule,
    NzGridModule,
    NzListModule,
    NzDividerModule,
    NzButtonModule,
    NzInputModule,
    NzDatePickerModule,
    NzFormModule,
    NzAlertModule,
    NzPopconfirmModule,
    NoDataComponent,
    RouterModule,
    ScrollGuideComponent,
    BackToTopComponent
  ]
})
export class SharedModule { }
