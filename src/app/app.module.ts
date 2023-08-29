import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {MatDialogModule} from '@angular/material/dialog';

//import {RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { DetailsTacheComponent } from './details-tache/details-tache.component';
import { GestionMembresComponent } from './gestion-membres/gestion-membres.component';
import { HeaderComponent } from './header/header.component';
import { CreerProjetComponent } from './creer-projet/creer-projet.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ListeTachesComponent } from './liste-taches/liste-taches/liste-taches.component';
import { InscriptionComponent } from './Inscription/inscription/inscription.component';
import { TableauDeBordProjetComponent } from './tableau-de-bord-projet/tableau-de-bord-projet.component';
import { AddProjetComponent } from './add-projet/add-projet/add-projet.component';
import { EditProjetComponent } from './edit-projet/edit-projet/edit-projet.component';
import { ViewProjetComponent } from './view-projet/view-projet/view-projet.component';
import { DeleteProjetComponent } from './delete-projet/delete-projet/delete-projet.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
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
    TableauDeBordProjetComponent,
    AddProjetComponent,
    EditProjetComponent,
    ViewProjetComponent,
    DeleteProjetComponent,
    PageNotFoundComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }