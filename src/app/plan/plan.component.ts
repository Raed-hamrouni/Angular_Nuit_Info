import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SeanceService } from '../shared/seance.service';
import { AdherentService } from '../shared/adherent.service';
import Swal from 'sweetalert2';
import { ResponsableService } from '../shared/responsable.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  Seance!: any;
  Adherent!: any;
  router: any;
  id:any;
  _id:any;
  p : number=1;
  ida:any
  idEvent:any;
  _idEvent:any;
  event:any;
  Responsable!: any;
  adherent_id:any;
  seance_id:any;
  seance:any;

  constructor( private adhServ: AdherentService,
    private responsableService: ResponsableService,
    private seanceservice: SeanceService,
    private http: HttpClient,
    private fb: FormBuilder,
    private route: Router) 
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
      title: 'Formation Ajoutée avec Succès',
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
