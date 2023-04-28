import { NgModule } from '@angular/core';
// FullCalendarModule.registerPlugins([ 
//   dayGridPlugin,
//   interactionPlugin
// ]);
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardMembreComponent } from './dashboard-membre/dashboard-membre.component';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { SidebarResponsableComponent } from './sidebar-responsable/sidebar-responsable.component';
import { SidebarMembreComponent } from './sidebar-membre/sidebar-membre.component';
import { NavbarSuppComponent } from './navbar-supp/navbar-supp.component';
import { ProfilClubComponent } from './profil-club/profil-club.component';
import { ListeMembresComponent } from './liste-membres/liste-membres.component';
import { ProfilMembreComponent } from './profil-membre/profil-membre.component';
import { NgxPaginationModule } from 'ngx-pagination';
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

// import { FullCalendarModule } from '@fullcalendar/angular';
// import interactionPlugin from '@fullcalendar/interaction';
// import dayGridPlugin from '@fullcalendar/daygrid';





@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    DashboardAdminComponent,
    DashboardMembreComponent,
    DashboardResponsableComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    InscriptionComponent,
    SidebarAdminComponent,
    SidebarResponsableComponent,
    SidebarMembreComponent,
    NavbarSuppComponent,
    ProfilClubComponent,
    ListeMembresComponent,
    ProfilMembreComponent,
    ReservationSalleComponent,
    InscriptionResponsableComponent,
    ListeAutresComponent,
    InfoMembreComponent,
    UpdateAdherentComponent,
    PlanComponent,
    ListeFormationsComponent,
    AjouterFormationComponent,
    ParticipantComponent,
    UpdateFormationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,

    // FullCalendarModule,


  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
