import { Component } from '@angular/core';

@Component({
  selector: 'app-details-tache',
  templateUrl: './details-tache.component.html',
  styleUrls: ['./details-tache.component.css']
})
export class DetailsTacheComponent {
  temps= "12h30";
  superficie(): string{
   return "12m2";
  }

}
