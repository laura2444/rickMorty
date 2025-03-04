import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.page.html',
  styleUrls: ['./page3.page.scss'],
  standalone: false,

})
export class Page3Page implements OnInit {
  menuType: string = 'overlay'

  constructor() { }

  ngOnInit() {
  }

}
