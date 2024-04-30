import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import Swal from 'sweetalert2';
import { SeanceService } from '../shared/seance.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css']
})
export class UpdateFormationComponent implements OnInit {

  adherentForm!: FormGroup
  id:any;
  seance: any;
_id:any
  Seance!: any;
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
  event:any
  lieu:any
  date_fin:any
  form:any
  file:any
  constructor(  private route: ActivatedRoute,
    private fb: FormBuilder,
    private seanceService: SeanceService,
    private authServ: AuthService,
    private router: Router
    ) { }

    ngOnInit(): void {
      this.id= this.route.snapshot.params['id'];
      this.seanceService.getSeance(this.id).subscribe(data => {
        this.seance = data;   
        },
        err=>{
          console.log(err);
        }
      )
      this.seanceService.getSeance(this.id).subscribe( data => {
        console.log(data);
        this.Seance = data;
      })
    }

 update(Seance:any): void {
  if (Seance.day<=Seance.endTime) {
    this.seanceService.updateSeance(this.id,this.Seance).subscribe(
      this.loginResponse=this.opensweetalert2);
      window.setTimeout(function(){location.reload()},1000)
      this.router.navigate(['/listeFormations']);
  } 
  
  
  else {
    console.error("La date de début ne peut pas être postérieure à la date de fin !");
    this.loginResponse=this.opensweetalert4();
  }
}





 opensweetalert2() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Formation Modifié avec Succès',
    showConfirmButton: false,
    timer: 3000
  })
 }
 opensweetalert4(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Champ des dates ne sont pas correctes !',
    footer: 'Vérifier les Dates de la Formation'
  })
 }
}
