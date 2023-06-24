import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'angular-highcharts';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.modules';
import { HighchartsChartModule } from 'highcharts-angular';

//- - - - - 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OutilDeMaintenaceComponent } from './outil-de-maintenace/outil-de-maintenace.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { InfoComponent } from './info/info.component';

import { Graphique1Component } from './graph/graphique1/graphique1.component';
import { Graphique2Component } from './graph/graphique2/graphique2.component';
import { Graphique3Component } from './graph/graphique3/graphique3.component';
import { Graphique4Component } from './graph/graphique4/graphique4.component';
import { Graphique5Component } from './graph/graphique5/graphique5.component';
import { Graphique6Component } from './graph/graphique6/graphique6.component';
import { Graphique7Component } from './graph/graphique7/graphique7.component';
import { Graphique8Component } from './graph/graphique8/graphique8.component';
import { Graphique9Component } from './graph/graphique9/graphique9.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    ConnexionComponent,
    OutilDeMaintenaceComponent,
    InfoComponent,
    CarrouselComponent,
    Graphique1Component,
    PageErreurComponent,
    Graphique2Component,
    Graphique3Component,
    Graphique4Component,
    Graphique5Component,
    Graphique6Component,
    Graphique7Component,
    Graphique8Component,
    Graphique9Component,
  ],
  imports: [
    ChartModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }