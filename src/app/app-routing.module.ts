import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './Inscription/inscription/inscription.component';
import { AddProjetComponent } from './add-projet/add-projet/add-projet.component';
import { CreerProjetComponent } from './creer-projet/creer-projet.component';
import { DeleteProjetComponent } from './delete-projet/delete-projet/delete-projet.component';
import { DetailsTacheComponent } from './details-tache/details-tache.component';
import { EditProjetComponent } from './edit-projet/edit-projet/edit-projet.component';
import { GestionMembresComponent } from './gestion-membres/gestion-membres.component';
import { ListeTachesComponent } from './liste-taches/liste-taches/liste-taches.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found/page-not-found.component';
import { TableauDeBordProjetComponent } from './tableau-de-bord-projet/tableau-de-bord-projet/tableau-de-bord-projet.component';


const routes : Routes= [
  {path: '', redirectTo:'inscription', pathMatch:'full'},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'creer-projet', component: CreerProjetComponent},
  {path: 'liste-taches', component: ListeTachesComponent},
  {path:'details-tache', component: DetailsTacheComponent},
  {path: 'gestion-membres', component: GestionMembresComponent},
  {path: 'add-projet', component: AddProjetComponent},
  {path: 'edit-projet', component: EditProjetComponent},
  {path: 'delete-projet', component: DeleteProjetComponent},
  {path:'projet', component:TableauDeBordProjetComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
