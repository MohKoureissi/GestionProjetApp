import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent implements OnInit{
  ngOnInit(): void {
    const text : string| any=localStorage.getItem('projet');
  if(text != null){
    this.tacheArr= JSON.parse(text);
  }
  }
  //On creer un tableau qui contient toute les taches
 tacheArr: any[] = [];
 tache : any={
  id : 0,
    titre: '',
    description :'',
    dateEcheance : '',
    assigneA : '',
   // projetId :'',
    etat: ''
 }

 ajoutTache(ajout : NgForm){
  this.tache.id = this.tacheArr.length +1;
  this.tacheArr.push(this.tache);
  localStorage.setItem('projet',JSON.stringify(this.tacheArr));
  this.tache= {
    id : 0,
    titre: '',
    description :'',
    dateEcheance : '',
    assigneA : '',
    //projetId :'',
    etat: ''
   }
 }

 onEdit(item :any){
  this.tache= item;
  this.tache.id = item.id; // Assurez-vous que votre modèle contient une propriété 'id'
  this.tache.titre = item.titre;
  this.tache.description = item.description
  this.tache.dateEcheance = item.dateEcheance;
  this.tache.assigneA = item.assigneA;
  this.tache.etat = item.etat;

 }

 onUpdate() {
  // Supposons que vous avez un identifiant unique pour chaque élément, appelé 'id'
  const tacheIdToUpdate = this.tache.id; // 'projet.id' devrait contenir l'identifiant de l'élément que vous éditez
  
  // Recherchez l'élément à mettre à jour en fonction de son identifiant
  const recordIndex = this.tacheArr.findIndex(m => m.id === tacheIdToUpdate);

  if (recordIndex !== -1) {
    // Mettez à jour la propriété 'nom' de l'élément trouvé
    this.tacheArr[recordIndex].nom = this.tache.nom;

    // Réinitialisez le modèle de formulaire après la mise à jour
    this.tache = {};

    // Enregistrez les modifications dans localStorage si nécessaire
    localStorage.setItem('projet', JSON.stringify(this.tacheArr));
  }
}


onDelete(id: number){
  for(let i = 0; i<= this.tacheArr.length; i++){
    if(this.tacheArr[i].id== id){
      this.tacheArr.splice(i,1);
    }
    localStorage.setItem('projet',JSON.stringify(this.tacheArr));
  }
  }




  changeEtat(){
    // Sélectionnez votre conteneur et les couleurs de choix dans le HTML
  const conteneur = document.querySelector('.item') as HTMLElement;
  const couleursChoix = document.querySelectorAll('.couleur-choix');
  // const nomEtat = item
  
  
  // Ajoutez un écouteur d'événement à chaque couleur de choix
  couleursChoix.forEach(couleur => {
      couleur.addEventListener('click', (event: Event) => {
          // Obtenez la couleur du fond de la couleur de choix cliquée
          const couleurSelectionnee = (event.target as HTMLElement).style.backgroundColor;
          const text = (event.target as HTMLElement).textContent;
          console.log(text);
          // const valeur = (event.target as HTMLElement).getAttribute(value)
          
          // Mettez à jour la couleur du conteneur en utilisant la couleur sélectionnée
          conteneur.style.backgroundColor = couleurSelectionnee;
          conteneur.setAttribute("value",text as string);
      });
  });
  
  }

}
