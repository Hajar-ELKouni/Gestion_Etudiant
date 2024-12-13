import { Component, inject } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../form/form.component';
import { DeletemodaleComponent } from './deletemodal/deletemodal.component';
import { FiliereService } from '../../filiere.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  private etudiantService=inject(EtudiantService)
  etudiants=this.etudiantService.etudiants
  private filiereService=inject(FiliereService)
  filieres = this.filiereService.filieres

  constructor(private modal:NgbModal){}
  
  openModal(){
    this.modal.open(FormComponent)
  }

  deleteEtudiant(id:number){
    this.etudiantService.deleteEtudiant(id)
  }
  updateEtudiant(etudiant:any){
    const ref=this.modal.open(FormComponent)
    ref.componentInstance.etudiantData=etudiant
    ref.componentInstance.action="Modifier"
  }

  openDeleteModal(etudiant:any){
    const ref= this.modal.open(DeletemodaleComponent)
    ref.componentInstance.etudiantData=etudiant
    ref.result.then(result=>{
      if (result=='oui'){
        this.deleteEtudiant(etudiant.id)
      }
    })
  }
  onSelectFiliere(event:any){
    const idFiliere = event.target.value;
    this.filiereService.getEtudiantsByFiliere(idFiliere).subscribe(data=>
      this.etudiants.set(data)
    )
    
  }
}