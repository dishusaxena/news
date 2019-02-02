import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  Routes }  from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { RatingsComponent } from './ratings/ratings.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';

const appRoutes: Routes=[
  { path: '', component:LoginComponent},
  {path:'home', component:HomeComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: ViewComponent },
  { path: 'ratings', component: RatingsComponent},
  { path: 'add', component: AddComponent},
  { path: 'signup', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(
        appRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }