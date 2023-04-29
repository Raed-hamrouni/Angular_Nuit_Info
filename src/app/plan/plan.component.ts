import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from '../shared/formation.service';
import { AdherentService } from '../shared/adherent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  Formation!: any;
  Adherent!: any;
  router: any;
  id:any;
  _id:any;
  p : number=1;
  ida:any
  idEvent:any;
  _idEvent:any;
  event:any;

  constructor( private adhServ: AdherentService,
    private formationservice: FormationService,
    private http: HttpClient,
    private fb: FormBuilder,
    private route: Router) 
    { }

  ngOnInit(): void {
    this._id =(localStorage.getItem('CurrentUser') || '');
    console.log("id membre ",this._id);
    this.affiche();

    this.formationservice.getFormation(this.idEvent).subscribe( data => {
      console.log(data);
      this.event = data;
    }) 
  }

  affiche(){
    this.formationservice.getAllFormation().subscribe(
      res=>{
        this.Formation=res
      },
    )
  }
   participer() {
        let e={event:this.idEvent}
        this.adhServ.participer(this._id,e).subscribe((res) => {
console.log("goalllllll",this.idEvent);
        });
        console.log();
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
