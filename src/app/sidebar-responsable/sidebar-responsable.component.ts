import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableService } from '../shared/responsable.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-sidebar-responsable',
  templateUrl: './sidebar-responsable.component.html',
  styleUrls: ['./sidebar-responsable.component.css']
})
export class SidebarResponsableComponent implements OnInit {
  id:any;
  closeResult = '';
  Responsable!:any;
    constructor(
      private router:Router, 
      private fb: FormBuilder,
      private responsableService: ResponsableService,
      private authServ: AuthService,
      private route: ActivatedRoute,
  
    ) { }
  
    ngOnInit(): void  {
       
      this.id =(localStorage.getItem('CurrentUser') || '');
      console.log("id Responsable ",this.id);
      
      
      this.responsableService.getResponsable(this.id).subscribe( data => {
        // console.log(data);  
        this.Responsable = data;
      })}
  
  
    logout(){
      this.authServ.logout()
    }
  }
  