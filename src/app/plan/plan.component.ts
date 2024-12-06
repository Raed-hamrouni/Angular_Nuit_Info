import { Component, OnInit } from '@angular/core';
import { SeanceService } from '../services/seance.service';
import { AdherentService } from '../services/adherent.service';
import Swal from 'sweetalert2';
import { ResponsableService } from '../services/responsable.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  Seance!: any;
  Adherent!: any;
  id:any;
  _id:any;
  p : number=1;
  idEvent:any;
  _idEvent:any;
  event:any;
  Responsable!: any;
  seance_id:any;
  seance:any;

  constructor( private adhServ: AdherentService, private responsableService: ResponsableService, private seanceservice: SeanceService,) 
    { }

  ngOnInit(): void {
    this._id =(localStorage.getItem('CurrentUser') || '');
    console.log("id membre ",this._id);
    this.affiche();

    this.seanceservice.getSeance(this.idEvent).subscribe( data => {
      console.log(data);
      this.event = data;
    }) 
  }
  getRespo(_id:number){
    this.responsableService.getResponsable(this.idEvent).subscribe((data:any)=>{
      this.Adherent = data;
      console.log("adherent BY SEANCE",this.Adherent);
      
    }) 
  }

  affiche(){
    this.seanceservice.getAllSeance().subscribe(
      res=>{
        this.Seance=res
      },
    )
  }
  participer(seanceId: string) {
 
    const adherent_id = localStorage.getItem('CurrentUser'); 
    if (!adherent_id) {
      console.error("Adherent ID not found.");
      return; 
    }
  
    const requestBody = {
      adherent_id: adherent_id,
      seance_id: seanceId
    };
  
    this.adhServ.participer(requestBody).subscribe(
      (res) => {
        console.log("Response from backend:", res);
       
      },
      (error) => {
        console.error("Error from backend:", error);
      
      }
    );
  }
  
  
  
  

  opensweetalert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Seance Ajoutée avec Succès',
      showConfirmButton: false,
      timer: 2000
    })
   }
   opensweetalert1(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ta participation est bien enregistrée',
      showConfirmButton: false,
      timer: 2000
    })
  }


}
