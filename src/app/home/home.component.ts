import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private demoService: DemoService) { }
  public userArr: any =[];

  ngOnInit(): void {
    this.userArr = this.demoService.getUserList();
  }

}
