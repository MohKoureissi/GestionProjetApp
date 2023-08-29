import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DetailsTacheComponent } from './details-tache/details-tache.component';
import { GestionMembresComponent } from './gestion-membres/gestion-membres.component';
import { HeaderComponent } from './header/header.component';
import { CreerProjetComponent } from './creer-projet/creer-projet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListeTachesComponent } from './liste-taches/liste-taches/liste-taches.component';
import { InscriptionComponent } from './Inscription/inscription/inscription.component';
import { TableauDeBordProjetComponent } from './tableau-de-bord-projet/tableau-de-bord-projet/tableau-de-bord-projet.component';

@NgModule({
  declarations: [
    AppComponent,

    TableauDeBordProjetComponent,
    ListeTachesComponent,

    DetailsTacheComponent,
    GestionMembresComponent,
    InscriptionComponent,
    HeaderComponent,
    CreerProjetComponent,
    TableauDeBordProjetComponent
  ],
  imports: [
    RouterModule.forRoot([

      {path: 'tableau-de-bord-projet', component: TableauDeBordProjetComponent},

      {path: '', component: InscriptionComponent},

      {path: 'creer-projet', component: CreerProjetComponent},
      {path:'details-tache', component: DetailsTacheComponent},
      {path: 'gestion-membres', component: GestionMembresComponent},
      //{path: '**', component: InscriptionComponent},
      {path:'projet', component:TableauDeBordProjetComponent}
    ]),
    
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }