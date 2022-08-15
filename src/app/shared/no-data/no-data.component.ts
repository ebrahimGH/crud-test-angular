import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-no-data',
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss']
})
export class NoDataComponent implements OnInit {
  @Input() description = "No DATA" 
  @Input() actionText = "Add"  
  @Input() actionsEnabled:boolean = true;
  @Output() addSome = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.addSome.emit(true)
  }
}
