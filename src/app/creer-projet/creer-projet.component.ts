import { Component } from '@angular/core';
import { DetailsTacheComponent } from '../details-tache/details-tache.component';
import { MatDialog } from '@angular/material/dialog';
import { GestionMembresComponent } from '../gestion-membres/gestion-membres.component';

@Component({
  selector: 'app-creer-projet',
  templateUrl: './creer-projet.component.html',
  styleUrls: ['./creer-projet.component.css']
})
export class CreerProjetComponent {
  constructor(private _dialogComp: MatDialog){}

  openDetail(){
    this._dialogComp.open(GestionMembresComponent)
  }
}
