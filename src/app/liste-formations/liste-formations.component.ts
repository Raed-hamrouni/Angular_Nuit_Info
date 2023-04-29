import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from '../shared/formation.service';
import Swal from 'sweetalert2';
import { AdherentService } from '../shared/adherent.service';
import { ResponsableService } from '../shared/responsable.service';


@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.css']
})
export class ListeFormationsComponent implements OnInit {
  Formation!: any;
  router: any;
  id:any;
  Adherent:any;
  p : number=1;

  dateDebut:any;
  formation:any
  year :any;
  title:any
  date:any
  idEvent:any
  heure:any
  duree:any
  loginResponse :any;
  loginResponse2:any
  loginResponse4:any;
  formateur:any
  prix:any
  file:any
  date_fin: any;
  lieu: any;
  form:any
  _id:any;
  closeResult = '';
  Responsable:any;
  constructor( private adhServ: AdherentService,
    private formationservice: FormationService,
    private authServ: AuthService,
   private responsableService: ResponsableService,
    private http: HttpClient,
    private fb: FormBuilder,
    private route: Router,
) 
    { }


  ngOnInit(): void {
    
      this.affiche();
      this.formationservice.getFormation(this.id).subscribe( data => {
        console.log(data);
        this.Formation = data;
      }) 
    }
    affiche(){
      this.formationservice.getAllFormation().subscribe(
        res=>{
          this.Formation=res
        },
      )
    }

    getList(id:number){
      this.adhServ.getAdherentByFormation(this.idEvent).subscribe((data:any)=>{
        this.Adherent = data;
        console.log("adherent BY FORMATION",this.Adherent.data);
        
      }) 
    }
  
    set texte(s:string){
      this.Adherent=this.filtrer(s);
    } 
  
    filtrer(s:string){
      return this.Adherent.filter((el:any)=>el.nom.indexOf(s)!=-1)
    }
  delete(id:any){
    this.formationservice.deleteFormation(id).subscribe( data => {   
    this.affiche()
    this.router.navigate(['/listeFormations']);  
    },
    )
  }

opensweetalert2() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Formation Modifiée avec Succès',
    showConfirmButton: false,
    timer: 2000
  })
 }
opensweetalert3() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Formation Supprimée avec Succès',
    showConfirmButton: false,
    timer: 2000
  })
 }
 opensweetalert4(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Champ date n"est pas correcte !',
    footer: 'Vérifier les Dates de formation'
  })
 }
 opensweetalert1(){
  Swal.fire({
    title: 'Êtes-vous sûr de vouloir supprimer ceci?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui ',
    cancelButtonText: 'Annuler'
  })}

}
