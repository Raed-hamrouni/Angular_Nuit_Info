import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from '../shared/formation.service';
import Swal from 'sweetalert2';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-formations.component.html',
  styleUrls: ['./liste-formations.component.css']
})
export class ListeFormationsComponent implements OnInit {
  Formation!: any;
  router: any;
  id:any;
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
  start:any
  date_fin: any;
  lieu: any;
  form:any
  _id:any;
  closeResult = '';
  constructor( private adhServ: FormationService,
    private formationservice: FormationService,
    private authServ: AuthService,
    private http: HttpClient,
    // private modalService: NgbModal,
    private fb: FormBuilder,
    private route: Router) 
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
  
  
  delete(id:any){
    this.formationservice.deleteFormation(id).subscribe( data => {   
      
    this.affiche()
    this.router.navigate(['/liste-formations']);  
    },
    )
  }
  update(){
    console.log(this._id);
    console.log("update ",this.lieu);
    let title=this.title;
    let heure=this.heure;
    let date_fin=this.date_fin;
    let duree=this.duree;
    let formateur=this.formateur;
    let prix=this.prix;
    let lieu=this.lieu;
    let date=this.start;
    if(date<=date_fin){
    this.form ={title,heure, date,date_fin,duree,formateur,prix,lieu}
    this.affiche()
    this.formationservice.updateFormation(this._id,this.form).subscribe( data => {

      console.log();

      this.loginResponse=this.opensweetalert2(); 
      window.setTimeout(function(){location.reload()},2000)

    });
 } 

 else{
  console.log("raka7 date ");
  this.loginResponse=this.opensweetalert4();
}
}
opensweetalert2() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Formation Modifée avec Succès',
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
   



   
//  open(content:any) {
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
}
