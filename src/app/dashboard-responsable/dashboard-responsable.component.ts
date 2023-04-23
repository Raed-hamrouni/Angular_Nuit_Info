import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/auth.service';
import { AdherentService } from '../shared/adherent.service';
import { ResponsableService } from '../shared/responsable.service';

@Component({
  selector: 'app-dashboard-responsable',
  templateUrl: './dashboard-responsable.component.html',
  styleUrls: ['./dashboard-responsable.component.css']
})
export class DashboardResponsableComponent implements OnInit {

  id:any;
  Responsable!: any;
  constructor(
    private router:Router, 
    private fb: FormBuilder,
    private adminServ: AdminService,
    private authServ: AuthService,
    private adhServ: AdherentService,
    private responsableService: ResponsableService
  ) { }

  ngOnInit(): void {
    this. id =(localStorage.getItem('CurrentUser') || '');
    this.responsableService.getResponsable(this.id).subscribe( data => {
      console.log(data);
      this.Responsable = data;
    })
  }
  logout(){
    this.authServ.logout()
  }
}

