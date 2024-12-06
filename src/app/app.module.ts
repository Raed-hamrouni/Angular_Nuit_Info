import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashboardMembreComponent } from './dashboard-membre/dashboard-membre.component';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarResponsableComponent } from './sidebar-responsable/sidebar-responsable.component';
import { SidebarMembreComponent } from './sidebar-membre/sidebar-membre.component';
import { NavbarSuppComponent } from './navbar-supp/navbar-supp.component';
import { ListeMembresComponent } from './liste-membres/liste-membres.component';
import { ProfilMembreComponent } from './profil-membre/profil-membre.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InscriptionResponsableComponent } from './inscription-coach/inscription-coach.component';
import { ListeAutresComponent } from './liste-autres/liste-autres.component';
import { InfoMembreComponent } from './info-membre/info-membre.component';
import { UpdateAdherentComponent } from './update-adherent/update-adherent.component';
import { PlanComponent } from './plan/plan.component';
import { ListeFormationsComponent } from './liste-seances/liste-seances.component';
import { ParticipantComponent } from './participant/participant.component';
import { UpdateFormationComponent } from './update-seance/update-seance.component';
import { PipePipe } from './pipe.pipe';
import { SortPipe } from './sort.pipe';
import { ProfilCoachComponent } from './profil-coach/profil-coach.component';
import { UpdateCoachComponent } from './update-coach/update-coach.component';
import { AjouterFormationComponent } from './ajouter-seance/ajouter-seance.component';






@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    DashboardMembreComponent,
    DashboardResponsableComponent,
    LoginComponent,
    NavbarComponent,
    InscriptionComponent,
    SidebarResponsableComponent,
    SidebarMembreComponent,
    NavbarSuppComponent,
    ListeMembresComponent,
    ProfilMembreComponent,
    InscriptionResponsableComponent,
    ListeAutresComponent,
    InfoMembreComponent,
    UpdateAdherentComponent,
    PlanComponent,
    ListeFormationsComponent,
    AjouterFormationComponent,
    ParticipantComponent,
    UpdateFormationComponent,
    PipePipe,
    SortPipe,
    ProfilCoachComponent,
    UpdateCoachComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,

    


  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
