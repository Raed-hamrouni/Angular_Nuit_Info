import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SeanceService } from '../services/seance.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-seance.component.html',
  styleUrls: ['./update-seance.component.css']
})
export class UpdateFormationComponent implements OnInit {

  id:any;
  seance: any;
_id:any
  Seance!: any; 
  loginResponse :any;
 
  constructor(  private route: ActivatedRoute,
    
    private seanceService: SeanceService,
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
  if (Seance.startTime<=Seance.endTime) {
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
    title: 'Seance Modifié avec Succès',
    showConfirmButton: false,
    timer: 3000
  })
 }
 opensweetalert4(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Champ des dates ne sont pas correctes !',
    footer: 'Vérifier les Dates de la Seance'
  })
 }
}
