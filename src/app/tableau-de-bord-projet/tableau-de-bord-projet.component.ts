import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet';
import { ProjectService } from '../services/project.service';
import { Membre } from '../models/membre';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

//import { CreerProjetComponent } from '../creer-projet/creer-projet.component';

@Component({
  selector: 'app-tableau-de-bord-projet',
  templateUrl: './tableau-de-bord-projet.component.html',
  styleUrls: ['./tableau-de-bord-projet.component.css']
})
export class TableauDeBordProjetComponent implements OnInit{
  projetArr:any []= [];
  projet : any={
    id : 0,
    nom: '',
    description : '',
    dateDebut : '',
    dateFin : '',
    membres : ''
  }
  
ngOnInit(): void {
  const text : string| any=localStorage.getItem('projet');
  if(text != null){
    this.projetArr= JSON.parse(text);
  }
  //this.projetArr.push(JSON.parse(text));
}

saveProjet(foms :NgForm){
  // debugger
  // this.projetArr.push(this.projet);
  this.projet.id = this.projetArr.length +1;
  this.projetArr.push(this.projet);
  localStorage.setItem('projet',JSON.stringify(this.projetArr));
  this.projet= {
    id : 0,
    nom: '', 
    description : '',
    dateDebut : '',
    dateFin : '',
    membres : ''
   }
}


onEdit(item :any){
 this.projet= item;
 this.projet.id = item.id; // Assurez-vous que votre modèle contient une propriété 'id'
  this.projet.nom = item.nom;
  this.projet.dateDebut = item.dateDebut;
  this.projet.dateFin = item.dateFin;
  this.projet.membre = item.membre;
  this.projet.description = item.description;

}
// onUpdate(){
//   const record = this.projetArr.find(m => m.id.projet.id);
//   localStorage.setItem('projet',JSON.stringify(this.projetArr));
//   record.nom = this.projet.nom;
// }

onUpdate() {
  // Supposons que vous avez un identifiant unique pour chaque élément, appelé 'id'
  const projectIdToUpdate = this.projet.id; // 'projet.id' devrait contenir l'identifiant de l'élément que vous éditez
  
  // Recherchez l'élément à mettre à jour en fonction de son identifiant
  const recordIndex = this.projetArr.findIndex(m => m.id === projectIdToUpdate);

  if (recordIndex !== -1) {
    // Mettez à jour la propriété 'nom' de l'élément trouvé
    this.projetArr[recordIndex].nom = this.projet.nom;

    // Réinitialisez le modèle de formulaire après la mise à jour
    this.projet = {};

    // Enregistrez les modifications dans localStorage si nécessaire
    localStorage.setItem('projet', JSON.stringify(this.projetArr));
  }
}



onDelete(id: number){
for(let i = 0; i<= this.projetArr.length; i++){
  if(this.projetArr[i].id== id){
    this.projetArr.splice(i,1);
  }
  localStorage.setItem('projet',JSON.stringify(this.projetArr));
}
}

selectedProject: string | null = null;
      setSelectedProject(nom: string) {
        this.selectedProject = nom;
      }

}

