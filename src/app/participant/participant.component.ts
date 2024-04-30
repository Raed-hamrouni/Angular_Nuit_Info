import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router, RouterLink } from '@angular/router';
import { SeanceService } from '../shared/seance.service';
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
  id:any
  _id:any
  _idEvent:any
  constructor(private router:Router ,
    private seanceServ: SeanceService,
    private fb: FormBuilder,
    private adhServ: AdherentService,
    private ar:ActivatedRoute
 ) { }

 ngOnInit(): void {
  this.adhServ.getAdherent(this.id).subscribe( data => {
    console.log(data);
    this.Adherent = data;
  })
 
}
getList(_id:number){
  this.adhServ.getAdherentBySeance(this.idEvent).subscribe((data:any)=>{
    this.Adherent = data;
    console.log("adherent BY SEANCE",this.Adherent);
    
  }) 
}
}
