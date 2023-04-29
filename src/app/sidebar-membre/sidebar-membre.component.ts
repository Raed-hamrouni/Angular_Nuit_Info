import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/auth.service';
import { AdherentService } from '../shared/adherent.service';
@Component({
  selector: 'app-sidebar-membre',
  templateUrl: './sidebar-membre.component.html',
  styleUrls: ['./sidebar-membre.component.css']
})
export class SidebarMembreComponent implements OnInit {
  id:any;
  closeResult = '';
  Adherent!:any;
  constructor(
    private router:Router, 
    private fb: FormBuilder,
    private adhService: AdherentService,
    private authServ: AuthService,
    private route: ActivatedRoute,

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

