import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from '../services/adherent.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  Adherent:any
  id:any
  adherent: any;
  
  constructor( private adhServ: AdherentService,  private ar:ActivatedRoute) { }

 ngOnInit(): void {

  let id:number
  id=this.ar.snapshot.params['id'];
  this.adhServ.getAdherentBySeance(id).subscribe((res:any)=>{
    this.Adherent=res.data
  })
  this.adhServ.getAdherent(id).subscribe( data => {
    console.log(data);  
    this.Adherent=data
  })
}



}

