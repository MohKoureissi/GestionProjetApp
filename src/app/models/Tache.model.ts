import { Membre } from "./Membre.model";
import { Projet } from "./Projet.model";

export interface Tache{
    id: number;
    titre: string;
    description: string;
    dateEcheance: Date;
    assigneA: Membre;
    projet: Projet;
    etat: string;
}