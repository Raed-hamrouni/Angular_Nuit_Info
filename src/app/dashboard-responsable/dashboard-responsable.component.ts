import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ResponsableService } from '../services/responsable.service';

@Component({
  selector: 'app-dashboard-responsable',
  templateUrl: './dashboard-responsable.component.html',
  styleUrls: ['./dashboard-responsable.component.css']
})
export class DashboardResponsableComponent implements OnInit {

  id:any;
  Responsable!: any;
  constructor(
    private authServ: AuthService,
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

