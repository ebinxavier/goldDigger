import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard'
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ScrapeCompaniesComponent } from './components/scrape-companies/scrape-companies.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';


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
