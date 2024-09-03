import { Component, OnInit } from '@angular/core';
import {RouteManager} from "../route-manager";

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  public readonly RouteManager = RouteManager;
  constructor() { }

  ngOnInit(): void {
  }
}
