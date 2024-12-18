import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdherentService } from '../services/adherent.service';
import { AuthService } from '../services/auth.service';

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
      //console.log("hello")
      this. id =(localStorage.getItem('CurrentUser') || '');
      this.adhServ.getAdherent(this.id).subscribe( data => {
        console.log(data);
        console.log("user identified");
        this.Adherent = data;
        
        
      })
    }
  
    logout(){
      this.authServ.logout()
    }
   
  }
  
