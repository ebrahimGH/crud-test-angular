import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {
  @Input() divTarget:any;
  constructor() { }

  ngOnInit(): void {
  }

}
