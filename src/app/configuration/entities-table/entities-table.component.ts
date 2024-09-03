import { Component, OnInit } from '@angular/core';
import {RouteManager} from "../../infrastructure/route-manager";

@Component({
  selector: 'app-entities-table',
  templateUrl: './entities-table.component.html',
  styleUrls: ['./entities-table.component.scss']
})
export class EntitiesTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    protected readonly RouteManager = RouteManager;
}
