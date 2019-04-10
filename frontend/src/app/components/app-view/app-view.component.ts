import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './app-view.component.html',
  styleUrls: ['./app-view.component.scss']
})
export class AppViewComponent implements OnInit {

  constructor() { }

  img1:string = "assets/images/fd.jpg";

  ngOnInit() {
  }

}
