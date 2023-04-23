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
  Entreprise!:any;
    constructor(
      private router:Router, 
      private fb: FormBuilder,
      private responsableService: ResponsableService,
      private authServ: AuthService,
      private route: ActivatedRoute,
  
    ) { }
  
    ngOnInit(): void  {
       
      this.id =(localStorage.getItem('CurrentUser') || '');
      console.log("id entreprise ",this.id);
      
      
      this.responsableService.getResponsable(this.id).subscribe( data => {
        // console.log(data);  
        this.Entreprise = data;
      })}
  
  
  
      // open(content:any) {
      //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      //     this.closeResult = `Closed with: ${result}`;
      //   }, (reason) => {
      //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      //   });
      // }
    
    
      // private getDismissReason(reason: any): string {
      //   if (reason === ModalDismissReasons.ESC) {
      //     return 'by pressing ESC';
      //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      //     return 'by clicking on a backdrop';
      //   } else {
      //     return `with: ${reason}`;
      //   }
      // }
    logout(){
      this.authServ.logout()
    }
  }
  