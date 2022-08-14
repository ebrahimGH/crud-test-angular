import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../Dtos/Customer';

@Component({
  selector: 'app-customer-card-view',
  templateUrl: './customer-card-view.component.html',
  styleUrls: ['./customer-card-view.component.scss']
})
export class CustomerCardViewComponent implements OnInit {
  @Input() customer!:Customer | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
