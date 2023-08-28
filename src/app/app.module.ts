import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DetailsTacheComponent } from './details-tache/details-tache.component';
import { GestionMembresComponent } from './gestion-membres/gestion-membres.component';

import { InscriptionComponent } from './Inscription/inscription/inscription.component';
import { HeaderComponent } from './header/header.component';
import { CreerProjetComponent } from './creer-projet/creer-projet.component';
import { TableauDeBordProjetComponent } from './tableau-de-bord-projet/tableau-de-bord-projet/tableau-de-bord-projet.component';
import { ListeTachesComponent } from './liste-taches/liste-taches/liste-taches.component';

@NgModule({
  declarations: [
    AppComponent,
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
      {path: '', component: TableauDeBordProjetComponent},
      {path: 'creer-projet', component: CreerProjetComponent},
      {path: 'liste-taches', component: ListeTachesComponent},
      {path:'details-tache', component: DetailsTacheComponent},
      {path: 'gestion-membres', component: GestionMembresComponent},
      {path: '**', component: TableauDeBordProjetComponent}
    ]),
    BrowserModule,
    AppRoutingModule,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }