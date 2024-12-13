import { Filiere } from "./filiere.models"

export interface Etudiant{
    id: number
    nom:string
    age:number
    photo:string
    filiere:Filiere
    
}