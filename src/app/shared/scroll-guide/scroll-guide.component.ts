import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-scroll-guide",
  templateUrl: "./scroll-guide.component.html",
  styleUrls: ["./scroll-guide.component.scss"],
})
export class ScrollGuideComponent implements OnInit {
  @Input() direction: string = "down";
  constructor() {}

  ngOnInit() {}
}
