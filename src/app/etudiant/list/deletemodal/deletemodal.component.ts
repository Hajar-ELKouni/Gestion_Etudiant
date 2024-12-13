import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-deletemodale',
  standalone: true,
  imports: [],
  templateUrl: './deletemodal.component.html',
  styleUrl: './deletemodal.component.css'
})
export class DeletemodaleComponent {
  etudiantData:any
  constructor(public activeModal:NgbActiveModal){
    
  }
  deleteEtudiant(id:number){
   
  }
}
