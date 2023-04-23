import { Component, OnInit } from '@angular/core';
import { AdherentService } from '../shared/adherent.service';
import { AuthService } from '../shared/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Adhérent } from '../Model/adhérent';
import Swal from 'sweetalert2';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-liste-membres',
  templateUrl: './liste-membres.component.html',
  styleUrls: ['./liste-membres.component.css']
})
export class ListeMembresComponent implements OnInit {
  router: any;
  id:any;
  filterAdherent:any;
  p : number=1;
  term!: string;
  adherent: any;
  nom:any
  _id:any
  prenom:any
  niveau:any
  cycle:any
  form:any
  etablissement:any
  searchTerm!: string;
  Adherent!: any;
  Admin!: any;
  closeResult = '';
  updateform!: FormGroup
  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer cet Adhérent ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  constructor( private adhServ: AdherentService,
    private authServ: AuthService,
    private http: HttpClient,
    private fb: FormBuilder,
    private route: Router) 
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
      //lena 5ater res feha kol chay m5alta ( adherent/ rh/ ...) donc star hedha ya3mel filtration bel role adherent
      this.Adherent=res.filter((item:any) => item.role=="Adherent")

      console.log(this.filterAdherent);
    
      },
    )
  }

  
  delete(id:any){
    this.adhServ.deleteAdherent(id).subscribe( data => {    
    this.affiche()
    //  this.toastr.success("Adhérent supprimé avec succes")
    this.router.navigate(['/liste-membres']);  
    },
    )
  }

  update(){
      
    this.adhServ.updateAdherent(this.id,this.Adherent).subscribe( data => {
      this.affiche()
      // this.toastr.success(" modifiée avec succès")
     this.router.navigate(['/liste-membres']);
    },(error)=>{
      console.log(error);
    });
 }

  logout(){
    this.authServ.logout()
  }


  opensweetalert2(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Adhérent Supprimé avec Succès',
      showConfirmButton: false,
      timer: 2000
    })
  }
 



  }
  






