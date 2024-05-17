import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  num1:number=0;
  num2:number=0;
  rslt!:number;
  somme():void{
    this.rslt=this.num1+this.num2;
  }
  sous():void{
    this.rslt=this.num1-this.num2;
  }
  Multiplication():void{
    this.rslt=this.num1*this.num2;
  }
  Divission():void{
    if(this.num2==0){
      alert("impossible de divission sur 0 && entrez autre nombre different 0")
    }
    else{

    this.rslt=this.num1/this.num2;
    }
  }

}
