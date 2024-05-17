import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiantList :Array<any>=[];
  constructor() {
    this.etudiantList=[{nom:"mouad",age:21,ville:"casa"}]
  }
  getEtudiantData(){
    return this.etudiantList;
  }
  ajouterEtudiantData(item:any):void{
    this.etudiantList.push(item);
  }
  info={
    nom:"kazangui",
    prenom:"mouad",
    email:"mouad@gmai.com"
  }
  getInfo(){
    return this.info;
  }
}
