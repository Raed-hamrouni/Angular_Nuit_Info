import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AdherentService } from '../services/adherent.service';

@Component({
  selector: 'app-sidebar-membre',
  templateUrl: './sidebar-membre.component.html',
  styleUrls: ['./sidebar-membre.component.css']
})
export class SidebarMembreComponent implements OnInit {

  id:any;
  Adherent!:any;

  constructor(
    private adhService: AdherentService,
    private authServ: AuthService,
  ) { }

  ngOnInit(): void  {
     
    this.id =(localStorage.getItem('CurrentUser') || '');
    console.log("id membre",this.id);
    this.adhService.getAdherent(this.id).subscribe( data => { 
      this.Adherent = data;
    })}


  logout(){
    this.authServ.logout()
  }
}

