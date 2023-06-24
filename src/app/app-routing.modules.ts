import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

// - - - - - - - - - -
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PageErreurComponent } from './page-erreur/page-erreur.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { OutilDeMaintenaceComponent } from './outil-de-maintenace/outil-de-maintenace.component';
import { InfoComponent } from './info/info.component';
import { CarrouselComponent } from './carrousel/carrousel.component';

import { Graphique1Component } from './graph/graphique1/graphique1.component';
import { Graphique2Component } from './graph/graphique2/graphique2.component';
import { Graphique3Component } from './graph/graphique3/graphique3.component';
import { Graphique4Component } from './graph/graphique4/graphique4.component';
import { Graphique5Component } from './graph/graphique5/graphique5.component';
import { Graphique6Component } from './graph/graphique6/graphique6.component';
import { Graphique7Component } from './graph/graphique7/graphique7.component';
import { Graphique8Component } from './graph/graphique8/graphique8.component';
import { Graphique9Component } from './graph/graphique9/graphique9.component';

const routes: Routes = [
  { path: '', redirectTo: 'acceuil', pathMatch: 'full'},
  { path: 'acceuil', component: LandingPageComponent},
  { path: 'connexion', component: ConnexionComponent, canActivate: [AuthGuard]},
  { path: 'outildemaintenance', component: OutilDeMaintenaceComponent },
  { path: 'information', component: InfoComponent},
  { path: 'carrousel', component: CarrouselComponent},
  { path: 'graphique', component: Graphique1Component},
  { path: '**', component: PageErreurComponent},
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })
export class AppRoutingModule { }

