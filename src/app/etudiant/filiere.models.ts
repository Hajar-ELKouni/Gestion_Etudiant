import { Etudiant } from "./etudiant.model";
export interface Filiere{
    id: number
    nomFiliere:string
    etudiants:Etudiant[];
   
    
}