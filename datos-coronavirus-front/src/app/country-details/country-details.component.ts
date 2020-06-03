import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Country } from '../country';
import { GlobalService } from '../global.service';
import { CountryName } from '../country-name';


@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  countryList: Country[];
  countrySearched: Country = null;
  search: boolean = false;
  searchName: string = "";

  countryNamesString: string[] = [];
  selectedCountry: string = "";
  i: number = 0;

  prueba: string;

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {

    this.globalService.getCountrySummary().subscribe(
      (data: Country[]) => this.countryList = data
    );
    
  }



  searchCountry(name: string){
    this.countrySearched = this.countryList.find(country => country.Country === name);
    this.search = true;
  }


  sortByOrdenAlfabetico(){
    this.countryList.sort((a,b) => {
      if(a.Country > b.Country){
        return 1;
      }
      if(a.Country < b.Country){
        return -1;
      }
      return 0;
    })
  }

  sortByNewConfirmed(){
    this.countryList.sort((a,b) => {
      if(a.NewConfirmed > b.NewConfirmed){
        return -1;
      }
      if(a.NewConfirmed < b.NewConfirmed){
        return 1;
      }
      return 0;
    })
  }

  sortByTotalConfirmed(){
    this.countryList.sort((a,b) => {
      if(a.TotalConfirmed > b.TotalConfirmed){
        return -1;
      }
      if(a.TotalConfirmed < b.TotalConfirmed){
        return 1;
      }
      return 0;
    })
  }

  sortByNewDeaths(){
    this.countryList.sort((a,b) => {
      if(a.NewDeaths > b.NewDeaths){
        return -1;
      }
      if(a.NewDeaths < b.NewDeaths){
        return 1;
      }
      return 0;
    })
  }

  sortByTotalDeaths(){
    this.countryList.sort((a,b) => {
      if(a.TotalDeaths > b.TotalDeaths){
        return -1;
      }
      if(a.TotalDeaths < b.TotalDeaths){
        return 1;
      }
      return 0;
    })
  }

  sortByNewRecovered(){
    this.countryList.sort((a,b) => {
      if(a.NewRecovered > b.NewRecovered){
        return -1;
      }
      if(a.NewRecovered < b.NewRecovered){
        return 1;
      }
      return 0;
    })
  }

  sortByTotalRecovered(){
    this.countryList.sort((a,b) => {
      if(a.TotalRecovered > b.TotalRecovered){
        return -1;
      }
      if(a.TotalRecovered < b.TotalRecovered){
        return 1;
      }
      return 0;
    })
  }

}
