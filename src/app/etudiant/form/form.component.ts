import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { EtudiantService } from '../etudiant.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FiliereService } from '../../filiere.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  form;
  etudiantData:any;
  action :string="Ajouter"
  photo!:File

  private filiereService=inject(FiliereService)
  filieres = this.filiereService.filieres
  constructor(
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private activeModal: NgbActiveModal,
   

  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      nom: ['', Validators.required],
      age: ['', Validators.required],
      filiere: ['', Validators.required],

    });
  }
  actionEtudiant() {
    if (this.form.valid) {
      if (this.action === 'Ajouter') {
        this.addEtudiant();
      } else {
        this.updateEtudiant(this.form.value);
      }
      this.activeModal.close();
    } else {
      console.warn('Form is invalid');
    }
  }
  addEtudiant() {
    this.etudiantService.addEtudiant(this.form.value,this.photo)
 
  }
  updateEtudiant(etudiant:any ){
this.etudiantService.updateEtudiant(etudiant)
  }
  closeModale(){
    this.activeModal.close()
  }
  ngOnInit(){
    if(this.action =="Modifier")
this.form.setValue(this.etudiantData)
  }
  fileSelected(event:any){
    const file=event.target.files[0]
    if (file)this.photo=file
  }
}
