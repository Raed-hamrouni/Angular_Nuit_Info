import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Adhérent } from '../Model/adhérent';
import { AdherentService } from '../services/adherent.service';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-adherent',
  templateUrl: './update-adherent.component.html',
  styleUrls: ['./update-adherent.component.css']
})
export class UpdateAdherentComponent implements OnInit {
  adherentForm!: FormGroup
  id:any;
  adherent: any;
  Adherent!: any;


  constructor(  private route: ActivatedRoute,
    private fb: FormBuilder,
    private adhServ: AdherentService,
    private authServ: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.adhServ.getAdherent(this.id).subscribe(data => {
      this.adherent = data;   
      },
      err=>{
        console.log(err);
      }
    )
    
    
    this. id =(localStorage.getItem('CurrentUser') || '');
    this.adhServ.getAdherent(this.id).subscribe( data => {
      console.log(data);
      this.Adherent = data;
    })
  }


  logout(){
    this.authServ.logout()
  }
  
  update(){
      
    this.adhServ.updateAdherent(this.id,this.Adherent).subscribe( data => {
      
     this.router.navigate(['/infoMembre',this.id]);
    },(error)=>{
      console.log(error);
    });
 }
 opensweetalert() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Adhérent Modifié avec Succès',
    showConfirmButton: false,
    timer: 3000
  })
 }
}

