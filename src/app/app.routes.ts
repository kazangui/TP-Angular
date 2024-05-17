import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormsComponent } from './forms/forms.component';
import { ServicesComponent } from './services/services.component';
import { RoutesComponent } from './routes/routes.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ObservableComponent } from './observable/observable.component';

export const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"directives", component: DirectivesComponent},
  {path:"pipes", component: PipesComponent},
  {path:"forms", component: FormsComponent},
  {path:"route", component: RoutesComponent},
  {path:"services", component: ServicesComponent},
  {path:"subscribe", component: SubscribeComponent,},
  {path:'',redirectTo:'/home',pathMatch:"full"}
];
