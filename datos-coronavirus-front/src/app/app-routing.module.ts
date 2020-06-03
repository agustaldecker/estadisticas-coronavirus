import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { GlobalSummaryComponent } from './global-summary/global-summary.component';
import { CountryCurveComponent } from './country-curve/country-curve.component';


const routes: Routes = [
  {path: 'global-summary', component: GlobalSummaryComponent},
  {path: 'country-details', component: CountryDetailsComponent},
  {path: 'country-curve', component: CountryCurveComponent},
  {path: '', component: GlobalSummaryComponent},
  {path: '**', component: GlobalSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
