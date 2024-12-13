import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css',
})
export class EtudiantComponent {
  title = 'Etudiant';
  constructor(private modal: NgbModal) {}
  open() {
    this.modal.open(FormComponent, { size: 'lg' });
  }
  close() {
    this.modal.dismissAll();
  }
}
