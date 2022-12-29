import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from './nav-bar.types';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  // props
  @Input() leftLinks: Array<NavLink> | NavLink;
  @Input() midLinks: Array<NavLink> | NavLink;
  @Input() rightLinks: Array<NavLink> | NavLink;

  // data

  

  // computed

  // methods

  // When mounting the component
  ngOnInit(): void {
    // this.loadLinks();
  }

}
