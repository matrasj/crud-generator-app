import { Component, OnInit } from '@angular/core';
import {RouteManager} from "../../infrastructure/route-manager";

@Component({
  selector: 'app-configuration-side-nav-bar',
  templateUrl: './configuration-side-nav-bar.component.html',
  styleUrls: ['./configuration-side-nav-bar.component.scss']
})
export class ConfigurationSideNavBarComponent implements OnInit {
  public readonly RouteManager = RouteManager;
  constructor() { }

  ngOnInit(): void {
  }
}
