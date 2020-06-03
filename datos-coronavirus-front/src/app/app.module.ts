import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData, CommonModule } from '@angular/common';
import localeEs from '@angular/common/locales/es-AR';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalSummaryComponent } from './global-summary/global-summary.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { CountryCurveComponent } from './country-curve/country-curve.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    GlobalSummaryComponent,
    CountryDetailsComponent,
    CountryCurveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
