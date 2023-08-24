import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauDeBordProjetComponent } from './tableau-de-bord-projet/tableau-de-bord-projet.component';
import { ListeTachesComponent } from './liste-taches/liste-taches.component';
import { DetailsTacheComponent } from './details-tache/details-tache.component';
import { GestionMembresComponent } from './gestion-membres/gestion-membres.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauDeBordProjetComponent,
    ListeTachesComponent,
    DetailsTacheComponent,
    GestionMembresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
