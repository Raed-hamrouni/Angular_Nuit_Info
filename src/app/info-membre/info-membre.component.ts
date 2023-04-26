import { Component, OnInit } from '@angular/core';
import { Adhérent } from '../Model/adhérent';
import { ActivatedRoute, Router } from '@angular/router';
import { AdherentService } from '../shared/adherent.service';
import { FormGroup } from '@angular/forms';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/auth.service';
@Component({
  selector: 'app-info-membre',
  templateUrl: './info-membre.component.html',
  styleUrls: ['./info-membre.component.css']
})
export class InfoMembreComponent implements OnInit {
  Adherent!: any;
  id:any;

  constructor( private route : ActivatedRoute,
    private adhServ: AdherentService ,
    private authServ: AuthService) { }
    ngOnInit(): void {
      this. id =(localStorage.getItem('CurrentUser') || '');
      this.adhServ.getAdherent(this.id).subscribe( data => {
        console.log(data);
        this.Adherent = data;
      })
    }
  
    logout(){
      this.authServ.logout()
    }
   
  }
  
