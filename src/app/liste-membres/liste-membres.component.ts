import { Component, OnInit } from '@angular/core';
import { AdherentService } from '../services/adherent.service';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

interface Adhérent {
  id:number;
  nom:string;
  prenom:string;
  email:string;
}

@Component({
  selector: 'app-liste-membres',
  templateUrl: './liste-membres.component.html',
  styleUrls: ['./liste-membres.component.css']
})
export class ListeMembresComponent implements OnInit {
  router: any;
  id:any;
  p : number=1;
  adherent: any;
  form:any
  Adherent!: any;

  constructor( private adhServ: AdherentService,
    private authServ: AuthService,
    private http: HttpClient,
 ) 
    { }

  ngOnInit(): void {
    this.http.get<Adhérent[]>('./assets/data/countries.json')
    .subscribe((data: Adhérent[]) => {
      this.Adherent = data;
    });
 
    this.adhServ.getAdherent(this.id).subscribe( data => {
      console.log(data);
      this.Adherent = data;
    })
    
    this.affiche();


  }
 
  affiche(){
    this.adhServ.getAllAdherent().subscribe(
      (res:any)=>{
      this.Adherent=res.filter((item:any) => item.role=="Adherent")  
      },
    )
  }

 

  delete(id:any){
    this.adhServ.deleteAdherent(id).subscribe( data => {   
      this.opensweetalert1()
    this.affiche()
    this.router.navigate(['/liste-membres']);  
    },
    )
  }

 


  logout(){
    this.authServ.logout()
  }

  opensweetalert1(){
  Swal.fire({
    title: 'Êtes-vous sûr de vouloir supprimer ceci?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprimer!',
    cancelButtonText: 'Annuler'
  })}

  opensweetalert2(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Adhérent Supprimé avec Succès',
      showConfirmButton: false,
      timer: 3000
    })
  }
 



  }
  






