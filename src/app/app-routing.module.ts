import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard'
import { ScrapeCompaniesComponent } from './scrape-companies/scrape-companies.component';
import { DetailsPageComponent } from './details-page/details-page.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'scrap',
        component: ScrapeCompaniesComponent
      },
      {
        path:'details',
        component:DetailsPageComponent
      },
      { path: "**", redirectTo: "scrap" }
    ]
  },
  { path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
