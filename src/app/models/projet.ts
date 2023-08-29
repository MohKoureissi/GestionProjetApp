import { Membre } from "./membre";

export interface Projet{
id : string;
nom: string;
description : string;
dateDebut : string;
dateFin : string;
membres  : Membre[];

}