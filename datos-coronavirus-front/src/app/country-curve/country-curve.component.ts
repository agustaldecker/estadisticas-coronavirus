import { Component, OnInit, ElementRef } from '@angular/core';
import { GlobalService } from '../global.service';
import { CountryDay } from '../country-day';
import { CountryName } from '../country-name';
import { Country } from '../country';
import { Observable } from 'rxjs';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-country-curve',
  templateUrl: './country-curve.component.html',
  styleUrls: ['./country-curve.component.css']
})
export class CountryCurveComponent implements OnInit {

  countryData: CountryDay[];
  countryNames: CountryName[];
  countryList: Country[];
  countrySlug: string = "";
  searchName: string = "";
  lastDay: CountryDay;

  myChart: any;
  chartData: any;

  arrayLabel: number[] = [];
  arrayDates: string[] = [];

  propertyDisplay: string = "";
  labelName: string = "";


  constructor(private elementRef: ElementRef, private service: GlobalService) { }

  ngOnInit(): void {
    this.service.getCountrySummary().subscribe(
      (data: Country[]) => this.countryList = data
    );
    
    this.service.getCountryNames().subscribe(
      (data: CountryName[]) => this.countryNames = data
    );
    
    
  }


  getStatistics(countryName: string){
    
    for(let i: number = 0; i < this.countryNames.length; i++){
      if(countryName === this.countryNames[i].Country){
        this.countrySlug = this.countryNames[i].Slug;
        break;
      }
      
    }  
    this.service.getCountryDayOne(this.countrySlug).subscribe(
        (data: CountryDay[]) =>{
        this.countryData = data;
        this.lastDay = this.countryData[this.countryData.length - 1];
        
      }, 
      (error) => console.log(error),
      () => this.chartit()
      );
    
      

      
  }


  chartit(){
    if(this.myChart){
      this.myChart.destroy();
    }
    
  
    let htmlRef = this.elementRef.nativeElement.querySelector(`#canvass`);
    
    this.getChartData();

    this.chartData = {
      labels: this.arrayDates,
      datasets: [{
        data: this.arrayLabel
      }]
    };
    this.myChart = new Chart(htmlRef, {
      type: 'line',
      data: this.chartData,
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            },
            scaleLabel:{
              display: true,
              labelString: this.labelName
            }
          }],
          xAxes: [{
            scaleLabel:{
              display: true,
              labelString: 'Día/Mes'
            }
          }]
        },
        legend: {
          display: false
        }
      }
      });
      
 }

 getChartData(){
  this.arrayLabel = [];
  this.arrayDates = []; 
  
  if(this.propertyDisplay === "Confirmados"){
    this.arrayLabel = this.arrayLabel.concat(this.countryData[0].Confirmed);
    this.arrayDates = this.arrayDates.concat(this.countryData[0].date.dayOfMonth.toString() + "/" + this.countryData[0].date.monthValue.toString())
    this.labelName = "Confirmados";

    for(let i:number = 1; i < this.countryData.length; i++){
      if(this.countryData[i].Confirmed - this.countryData[i-1].Confirmed >= 0){
        this.arrayLabel = this.arrayLabel.concat(this.countryData[i].Confirmed - this.countryData[i-1].Confirmed);
      } else{
        this.arrayLabel = this.arrayLabel.concat(0);
      }
      this.arrayDates = this.arrayDates.concat(this.countryData[i].date.dayOfMonth.toString() + "/" + this.countryData[i].date.monthValue.toString());
    }
   }

   if(this.propertyDisplay === "Muertos"){
    this.arrayLabel = this.arrayLabel.concat(this.countryData[0].Deaths);
    this.arrayDates = this.arrayDates.concat(this.countryData[0].date.dayOfMonth.toString() + "/" + this.countryData[0].date.monthValue.toString())
    this.labelName = "Muertos";

    for(let i:number = 1; i < this.countryData.length; i++){
      if(this.countryData[i].Deaths - this.countryData[i-1].Deaths >= 0){
        this.arrayLabel = this.arrayLabel.concat(this.countryData[i].Deaths - this.countryData[i-1].Deaths);
      } else{
        this.arrayLabel = this.arrayLabel.concat(0);
      }
      this.arrayDates = this.arrayDates.concat(this.countryData[i].date.dayOfMonth.toString() + "/" + this.countryData[i].date.monthValue.toString());
    }
   }

   if(this.propertyDisplay === "Recuperados"){
    this.arrayLabel = this.arrayLabel.concat(this.countryData[0].Recovered);
    this.arrayDates = this.arrayDates.concat(this.countryData[0].date.dayOfMonth.toString() + "/" + this.countryData[0].date.monthValue.toString())
    this.labelName = "Recuperados";

    for(let i:number = 1; i < this.countryData.length; i++){
      if(this.countryData[i].Recovered - this.countryData[i-1].Recovered >= 0){
        this.arrayLabel = this.arrayLabel.concat(this.countryData[i].Recovered - this.countryData[i-1].Recovered);
      } else{
        this.arrayLabel = this.arrayLabel.concat(0);
      }
      this.arrayDates = this.arrayDates.concat(this.countryData[i].date.dayOfMonth.toString() + "/" + this.countryData[i].date.monthValue.toString());
    }
   }

   if(this.propertyDisplay === "Activos"){
    this.arrayLabel = this.arrayLabel.concat(this.countryData[0].Active);
    this.arrayDates = this.arrayDates.concat(this.countryData[0].date.dayOfMonth.toString() + "/" + this.countryData[0].date.monthValue.toString())
    this.labelName = "Activos";

    for(let i:number = 1; i < this.countryData.length; i++){
      if(this.countryData[i].Active - this.countryData[i-1].Active >= 0){
        this.arrayLabel = this.arrayLabel.concat(this.countryData[i].Active - this.countryData[i-1].Active);
      } else{
        this.arrayLabel = this.arrayLabel.concat(0);
      }
      this.arrayDates = this.arrayDates.concat(this.countryData[i].date.dayOfMonth.toString() + "/" + this.countryData[i].date.monthValue.toString());
    }
   }
 }

 updateChart(){
   this.myChart.destroy();
   this.chartit();
   this.myChart.update();

 }
 


  
}
