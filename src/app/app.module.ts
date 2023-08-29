import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauDeBordProjetComponent } from './tableau-de-bord-projet/tableau-de-bord-projet.component';
import { DetailsTacheComponent } from './details-tache/details-tache.component';
import { GestionMembresComponent } from './gestion-membres/gestion-membres.component';
import { CreerProjetComponent } from './creer-projet/creer-projet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TableauDeBordProjetComponent,
    DetailsTacheComponent,
    GestionMembresComponent,
    CreerProjetComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'tableau-de-bord-projet', component: TableauDeBordProjetComponent},
      {path: 'creer-projet', component: CreerProjetComponent},
      {path:'details-tache', component: DetailsTacheComponent},
      {path: 'gestion-membres', component: GestionMembresComponent},
      {path: '**', component: TableauDeBordProjetComponent}
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