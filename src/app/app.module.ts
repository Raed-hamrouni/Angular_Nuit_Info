import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardMembreComponent } from './dashboard-membre/dashboard-membre.component';
import { DashboardResponsableComponent } from './dashboard-responsable/dashboard-responsable.component';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    DashboardAdminComponent,
    DashboardMembreComponent,
    DashboardResponsableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
