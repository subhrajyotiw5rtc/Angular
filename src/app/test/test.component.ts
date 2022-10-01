import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name:any = '';
  location: any = '';

  bindData: any = '';

  constructor() { }

  ngOnInit(): void {
    this.name = "Angular";
    this.location = window.location.href;
  }

  myFunction(event: any) {
    console.log('Event', event);
    this.bindData = event.type;
  }

}
