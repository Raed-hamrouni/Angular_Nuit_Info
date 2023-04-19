import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardMembreComponent } from './dashboard-membre/dashboard-membre.component';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
    { path: 'acceuil',component:AcceuilComponent},
    { path:'espaceAdmin',component:DashboardAdminComponent},
    { path:'espaceMembre',component:DashboardMembreComponent},
    { path:'espaceResponsable',component:DashboardResponsableComponent},
    { path:'navbar',component:NavbarComponent},
    { path:'inscription',component:InscriptionComponent},
    { path:'login',component:LoginComponent},



  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
