import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adhérent } from '../Model/adhérent';
import { AdherentService } from '../services/adherent.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-dashboard-membre',
  templateUrl: './dashboard-membre.component.html',
  styleUrls: ['./dashboard-membre.component.css']
})
export class DashboardMembreComponent implements OnInit {
  adherent!: Adhérent;
  Adherent!: any;
  id:any;
   constructor(private router:Router,  private authServ: AuthService, private adhServ: AdherentService) { }


     ngOnInit(): void {
      this.id =(localStorage.getItem('CurrentUser') || '');
      this.adhServ.getAdherent(this.id).subscribe( data => {
        console.log(data);
        this.Adherent = data;
      })
    }
  logout(){
    this.authServ.logout()
  }
  
  }
