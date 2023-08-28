import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeTachesComponent } from './liste-taches/liste-taches.component';
import { DetailsTacheComponent } from './details-tache/details-tache.component';
import { GestionMembresComponent } from './gestion-membres/gestion-membres.component';
import { InscriptionComponent } from './Inscription/inscription/inscription.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeTachesComponent,
    DetailsTacheComponent,
    GestionMembresComponent,
    InscriptionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
