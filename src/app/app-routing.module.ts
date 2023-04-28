import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardMembreComponent } from './dashboard-membre/dashboard-membre.component';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { SidebarResponsableComponent } from './sidebar-responsable/sidebar-responsable.component';
import { SidebarMembreComponent } from './sidebar-membre/sidebar-membre.component';
import { NavbarSuppComponent } from './navbar-supp/navbar-supp.component';
import { ProfilClubComponent } from './profil-club/profil-club.component';
import { ListeMembresComponent } from './liste-membres/liste-membres.component';
import { ProfilMembreComponent } from './profil-membre/profil-membre.component';
import { ReservationSalleComponent } from './reservation-salle/reservation-salle.component';
import { InscriptionResponsableComponent } from './inscription-responsable/inscription-responsable.component';
import { ListeAutresComponent } from './liste-autres/liste-autres.component';
import { InfoMembreComponent } from './info-membre/info-membre.component';
import { UpdateAdherentComponent } from './update-adherent/update-adherent.component';
import { PlanComponent } from './plan/plan.component';
import { ListeFormationsComponent } from './liste-formations/liste-formations.component';
import { AjouterFormationComponent } from './ajouter-formation/ajouter-formation.component';
import { ParticipantComponent } from './participant/participant.component';
import { UpdateFormationComponent } from './update-formation/update-formation.component';

const routes: Routes = [

    { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
    { path: 'acceuil',component:AcceuilComponent},
    { path:'espaceAdmin',component:DashboardAdminComponent},
    { path:'espaceMembre',component:DashboardMembreComponent},
    { path:'espaceResponsable',component:DashboardResponsableComponent},
    { path:'navbar',component:NavbarComponent},
    { path:'inscription',component:InscriptionComponent},
    { path:'login',component:LoginComponent},
    { path:'sidebarAdmin',component:SidebarAdminComponent},
    { path:'sidebarResponsable',component:SidebarResponsableComponent},
    { path:'sidebarMembre',component:SidebarMembreComponent},
    { path:'navbarSupp',component:NavbarSuppComponent},
    { path:'profilClub',component:ProfilClubComponent},
    { path:'listeMembre',component:ListeMembresComponent},
    { path:'profil-membre/:id',component:ProfilMembreComponent},
    { path:'reservation',component:ReservationSalleComponent},
    { path:'inscriptionResp',component:InscriptionResponsableComponent},
    { path:'listeAutresResp',component:ListeAutresComponent},
    { path:'infoMembre/:id',component:InfoMembreComponent},
    { path:'modifierProfil',component:UpdateAdherentComponent},
    { path:'planEvent',component:PlanComponent},
    { path:'listeFormations',component:ListeFormationsComponent},
    { path:'AjoutEvent',component:AjouterFormationComponent},
    { path:'Participant',component:ParticipantComponent},
    { path:'updateFormation/:id',component:UpdateFormationComponent},




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
