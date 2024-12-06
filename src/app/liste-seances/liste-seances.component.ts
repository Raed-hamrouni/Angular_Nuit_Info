import { Component, OnInit } from '@angular/core';
import { SeanceService } from '../services/seance.service';
import Swal from 'sweetalert2';
import { AdherentService } from '../services/adherent.service';



@Component({
  selector: 'app-liste-formations',
  templateUrl: './liste-seances.component.html',
  styleUrls: ['./liste-seances.component.css']
})
export class ListeFormationsComponent implements OnInit {
  Seance!: any;
  id:any;
  Adherent:any;
  p : number=1;

  constructor( private adhServ: AdherentService,
    private seanceService: SeanceService,
) 
    { }


  ngOnInit(): void {
    
      this.affiche();
      this.seanceService.getSeance(this.id).subscribe( data => {
        console.log(data);
        this.Seance = data;
      }) 
    }
    affiche(){
      this.seanceService.getAllSeance().subscribe(
        res=>{
          this.Seance=res
        },
      )
    }

    
      getList(id:any){
        this.adhServ.getAdherentBySeance(id).subscribe((data:any)=>{
          this.Adherent = data;
          console.log("adherent BY Seance",this.Adherent);
          
        }) 
      }
    
    
  
    set texte(s:string){
      this.Adherent=this.filtrer(s);
    } 
  
    filtrer(s:string){
      return this.Adherent.filter((el:any)=>el.nom.indexOf(s)!=-1)
    }


opensweetalert2() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Seance Modifiée avec Succès',
    showConfirmButton: false,
    timer: 2000
  })
 }
opensweetalert3() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Seance Supprimée avec Succès',
    showConfirmButton: false,
    timer: 2000
  })
 }
 opensweetalert4(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Champ date n"est pas correcte !',
    footer: 'Vérifier les Dates de seance'
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
