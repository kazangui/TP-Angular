import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [NgIf,NgFor,NgClass,NgStyle,NgSwitch,NgStyle,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  tab:number[]=[1,2,3,12,14];
  note :number=12

}
