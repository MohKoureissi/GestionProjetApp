import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet';
import { ProjectService } from '../services/project.service';
import { Membre } from '../models/membre';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

//import { CreerProjetComponent } from '../creer-projet/creer-projet.component';

@Component({
  selector: 'app-tableau-de-bord-projet',
  templateUrl: './tableau-de-bord-projet.component.html',
  styleUrls: ['./tableau-de-bord-projet.component.css']
})
export class TableauDeBordProjetComponent implements OnInit{
  
  public loading :boolean = false;
  public projets : Projet[] = [];
  public errorMessage : string | null = null;
  //===================================pour add projet
  public projet  : Projet={} as Projet ;
  public membres:Membre[]= [] as Membre[];
//=======================================================modal data send 

projetEnEdition: any = {}; // Propriété pour stocker les détails du projet à éditer
public projetE : Projet={} as Projet
// ==============================================================
constructor(private projectService : ProjectService, private router : Router, private activatedRoute : ActivatedRoute, private http : HttpClient){}
//===================================================================================
openEditModal(projet: any) {
  this.projetEnEdition = projet; // Stockez les détails du projet à éditer
  
}

ngOnInit(): void {
  this.loading=true;
  this.projectService.getAllProjects().subscribe((data:Projet[])=>{
    this.projets=data;
    this.loading = false;

  }, (error)=> {this.errorMessage= error;
  this.loading=false;});

  //===================================================for add project
  this.projectService.getAllMembers().subscribe((data:Membre[]) => {
    this.membres= data;
    this.loading=false;
  }, (error) => {
    this.errorMessage= error;
    
  });

  //===========================================================================================for edit
  this.activatedRoute.paramMap.subscribe((param : ParamMap)=>{
    const id = param.get('id');
    if (id !== null) {
      this.projetE.id = id;
    }
    
  });
  if(this.projetE.id){
    this.projectService.getProject(this.projetE.id).subscribe((data:Projet) => {
      this.projetE= data;
      this.projectService.getAllMembers().subscribe((data:Membre[]) => {
        this.membres= data;
        this.loading=false;
      });
    }, (error) => {
      this.errorMessage= error;
      
    });
  }
  //===========================================================
  
}

public createSubmit(){
  this.projectService.addProject(this.projet).subscribe((data: Projet) => {

    this.router.navigate(['projet']).then();
  }, (error) => {
    this.errorMessage= error;
    this.router.navigate(['./']).then();

  })
}

// public updateSubmit(){
//   this.projectService.updateProject(this.projet, this.projet.id).subscribe((data: Projet) => {

//     this.router.navigate(['projet']).then();
//   }, (error) => {
//     this.errorMessage= error;
//     this.router.navigate(['projet']).then();

//   })
// }
//=======================================================js modal data send
saveChanges() {
  this.projectService.updateProject(this.projetEnEdition, this.projetE.id).subscribe(
    (response) => {
      console.log('Modifications enregistrées avec succès :', response);
    },
    (error) => {
      console.error(
        "Une erreur s'est produite lors de l'enregistrement des modifications :",
        error
      );
    }
  );
}
}
