import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router, RouterLink } from '@angular/router';
import { FormationService } from '../shared/formation.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { AdherentService } from '../shared/adherent.service';
@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  Adherent:any
  idEvent:any
  constructor(private router:Router ,
    private formationServ: FormationService,
    private fb: FormBuilder,
    private adhServ: AdherentService,
    private ar:ActivatedRoute
 ) { }

 ngOnInit(): void {
  let id:number;
  this.ar.paramMap.subscribe((params : Params)=>{
      id=+params.get('id')
      this.adhServ.getAdherentByFormation(id).subscribe(data=>{ this.Adherent = data; }
      )
    }
  )
 
}
  getList(id:number){
    this.adhServ.getAdherentByFormation(this.idEvent).subscribe((data:any)=>{
      this.Adherent = data;
      console.log("adherent BY FORMATION",this.Adherent);
      
    }) 
  }
}