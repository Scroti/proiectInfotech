import { navbarData } from './nav-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  collapsed = !false;
  navData = navbarData;

  constructor() {}

  ngOnInit(): void {}
}
