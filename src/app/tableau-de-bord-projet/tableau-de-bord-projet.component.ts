import { Component } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CreerProjetComponent } from '../creer-projet/creer-projet.component';

@Component({
  selector: 'app-tableau-de-bord-projet',
  templateUrl: './tableau-de-bord-projet.component.html',
  styleUrls: ['./tableau-de-bord-projet.component.css']
})
export class TableauDeBordProjetComponent {
  
  constructor(private _dialogComp: MatDialog){}

  openCreateProjet(){
    this._dialogComp.open(CreerProjetComponent)
  }
  message(){
    console.log("bienvenue")
  }
 
  name= "Projet de construction";
  
}
