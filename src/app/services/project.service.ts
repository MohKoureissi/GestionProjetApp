import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Projet } from '../models/projet';
import { Membre } from '../models/membre';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

    private  serverUrl: string = 'http://localhost:9000'; // Supprimez un des "http://" ici

    constructor(private httpClient: HttpClient) { }

    public getAllProjects(){
      let dataURL: string = `${this.serverUrl}/projet`; // Utilisation de ProjectService.serverUrl
      return this.httpClient.get<Projet[]>(dataURL).pipe(catchError(this.handleError));
    }

    // get projet
    public getProject(projetId: string): Observable<Projet>{
      let dataURL: string = `${this.serverUrl}/projet/${projetId}`; // Utilisation de ProjectService.serverUrl
      return this.httpClient.get<Projet>(dataURL).pipe(catchError(this.handleError));
    }

    // add projet
    public addProject(projet: Projet): Observable<Projet>{
      let dataURL: string = `${this.serverUrl}/projet`; // Utilisation de ProjectService.serverUrl
      return this.httpClient.post<Projet>(dataURL, projet).pipe(catchError(this.handleError));
    }

    // update projet
    public updateProject(projet: Projet, projetId: string): Observable<Projet>{
      let dataURL: string = `${this.serverUrl}/projet`; // Utilisation de ProjectService.serverUrl
      const ty = this.httpClient.put<Projet>(dataURL, projet).pipe(catchError(this.handleError));
      console.log(ty);
      return ty;
    }

    // delete projet 
    public deleteProject(projetId: string): Observable<{}>{
      let dataURL: string = `${this.serverUrl}/projet/${projetId}`; // Utilisation de ProjectService.serverUrl
      return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
    }
//get all members
      public getAllMembers(): Observable<Membre[]>{
        let dataURL: string = `${this.serverUrl}/membres`; // Utilisation de ProjectService.serverUrl
        return this.httpClient.get<Membre[]>(dataURL).pipe(catchError(this.handleError));
      }
// get single member
      public getMembersOfProject(projetId: string): Observable<Membre[]>{
        let dataURL: string = `${this.serverUrl}/membres/${projetId}`; // Utilisation de ProjectService.serverUrl
        return this.httpClient.get<Membre[]>(dataURL).pipe(catchError(this.handleError));
      }




    //==================================================================================================== pour les erreurs
    public handleError(error: HttpErrorResponse){
      let errorMesssage: string='';
      if(error.error instanceof ErrorEvent){
        // Client error
        errorMesssage = `Error : ${error.error.message}`;
      } else {
        // Server error
        errorMesssage = `Status : ${error.status} \n Message: ${error.message}`;
      }
      return throwError(errorMesssage);
    }

}
