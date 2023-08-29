import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-creer-projet',
  templateUrl: './creer-projet.component.html',
  styleUrls: ['./creer-projet.component.css']
})
export class CreerProjetComponent implements OnInit {

        public loading :boolean = false;
        public projets : Projet[] = [];
        public errorMessage : string | null = null;

  constructor(private projectService : ProjectService){}
 
  ngOnInit(): void {
        this.loading=true;
        this.projectService.getAllProjects().subscribe((data:Projet[])=>{
          this.projets=data;
          this.loading = false;

        }, (error)=> {this.errorMessage= error;
        this.loading=false;});
        
  }

}
