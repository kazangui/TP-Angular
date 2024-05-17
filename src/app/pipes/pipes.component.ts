import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiplePipe } from '../multiple.pipe';
import { TpPipe } from '../tp.pipe';


@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [FormsModule,MultiplePipe,DatePipe,TpPipe,DecimalPipe,CurrencyPipe,PercentPipe , UpperCasePipe,LowerCasePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent
 {
  texte: string[] = []; atos: string = "";
    date : Date = new Date();
    nombre : number=100;
    message:string="Welcome";
HT: any;
}
