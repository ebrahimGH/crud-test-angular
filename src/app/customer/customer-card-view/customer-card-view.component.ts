import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../Dtos/Customer';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-customer-card-view',
  templateUrl: './customer-card-view.component.html',
  styleUrls: ['./customer-card-view.component.scss']
})
export class CustomerCardViewComponent implements OnInit {
  @Input() customer!:Customer | undefined;
  @Output() delete = new EventEmitter<boolean>();
  constructor(private nzMessageService: NzMessageService) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.nzMessageService.info('Delete canceled');
  }

  confirm(): void {
    this.delete.emit(true) 
  }
}
