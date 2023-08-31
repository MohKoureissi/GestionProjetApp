import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-taches',
  templateUrl: './liste-taches.component.html',
  styleUrls: ['./liste-taches.component.css']
})
export class ListeTachesComponent {

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
