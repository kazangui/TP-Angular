import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent {
formData: any = {};
affichageMessage: boolean = false;
username: string ="";
email: string="";
password: string="";

enregistrerutilisateur(formdata: NgForm) {
  this.formData = formdata.value;
  this.affichageMessage = true;
}
}

