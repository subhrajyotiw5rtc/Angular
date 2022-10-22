import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private demoService: DemoService) { }

  public userArr: any =[];

  ngOnInit(): void {
    this.userArr = this.demoService.getUserList();
  }

}
