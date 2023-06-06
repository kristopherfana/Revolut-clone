import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  active = 1;

  constructor() {

  }

  ngOnInit(): void {
  }

}
