import { Component, OnInit } from '@angular/core';

import { Global } from '../global';
import { Country } from '../country';

import { GlobalService } from '../global.service';

@Component({
  selector: 'app-global-summary',
  templateUrl: './global-summary.component.html',
  styleUrls: ['./global-summary.component.css']
})
export class GlobalSummaryComponent implements OnInit {

  global: Global;

  constructor(private globalService : GlobalService) { }

  ngOnInit(): void {
    this.globalService.getGlobal().subscribe(
      (data: Global) => this.global = {
        newConfirmed: data['NewConfirmed'],
        totalConfirmed: data['TotalConfirmed'],
        newDeaths: data['NewDeaths'],
        totalDeaths: data['TotalDeaths'],
        newRecovered: data['NewRecovered'],
        totalRecovered: data['TotalRecovered']
      });
  }

}
