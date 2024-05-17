import { Component } from '@angular/core';
import { EtudiantService } from './etudiant.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent{
  public emodel :any={};
  public esource  :Array<any>=[];
  constructor(private eservice :EtudiantService ){
    this.esource=this.eservice.getEtudiantData();


  }//injection
  info=this.eservice.getInfo()

  private validate():boolean{
    let status:boolean=true;
    if(typeof(this.emodel.nom)=='undefined'){
      alert("champ nom est vide")
      status=false;
      return status;
    }
    else if(typeof(this.emodel.ville)=='undefined'){
      alert("champ ville est vide")
      status=false;
      return status;
    }
    else if(typeof(this.emodel.age)=='undefined'){
      alert("champ age est vide")
      status=false;
      return status;
    }
    return status


}

public reset ():void{
    this.emodel={}
    }
    public submit():void{
      if(this.validate()){
        this.eservice.ajouterEtudiantData(this.emodel);
        this.reset();
      }
    }
  }
