import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AlertModule, ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ScrapeCompaniesComponent } from './components/scrape-companies/scrape-companies.component';
import { DetailsPageComponent } from './components/details-page/details-page.component';
import { RaTranslationsComponent } from './components/ra-translations/ra-translations.component';
import { SelectStateComponent } from './modals/select-state/select-state.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    SelectStateComponent,
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ScrapeCompaniesComponent,
    DetailsPageComponent,
    RaTranslationsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule

  ],
  entryComponents:[
    SelectStateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
