import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-routes',
  standalone: true,
  imports: [RouterModule,RoutesComponent,RouterLink,RouterLinkActive],
  templateUrl: './routes.component.html',
  styleUrl: './routes.component.css'
})
export class RoutesComponent {
  constructor(private router:Router){}
  onService(){
    this.router.navigate(['services'])
  }
  onPipe(){
    this.router.navigate(['pipes'])
  }
}
