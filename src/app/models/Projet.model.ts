import { Membre } from "./Membre.model";

export interface Projet{
    id: number;
    nom: string;
    description: string;
    dateDebut: Date;
    dateFin: Date;
    membres: Membre[];
}