import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: false,

})
export class Page2Page implements OnInit {
  menuType: string = 'overlay'

  constructor() { }

  ngOnInit() {
    
  }

}
