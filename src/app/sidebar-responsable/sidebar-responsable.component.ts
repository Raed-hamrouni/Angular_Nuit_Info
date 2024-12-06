import { Component, OnInit } from '@angular/core';
import { ResponsableService } from '../services/responsable.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar-responsable',
  templateUrl: './sidebar-responsable.component.html',
  styleUrls: ['./sidebar-responsable.component.css']
})
export class SidebarResponsableComponent implements OnInit {
  id:any;
  Responsable!:any;

    constructor(
      private responsableService: ResponsableService,
      private authServ: AuthService,
    ) { }
  
    ngOnInit(): void  {
       
      this.id =(localStorage.getItem('CurrentUser') || '');
      console.log("id Responsable ",this.id);
      
      
      this.responsableService.getResponsable(this.id).subscribe( data => {
        //console.log(data);  
        this.Responsable = data;
      })}
  
  
    logout(){
      this.authServ.logout()
    }
  }
  