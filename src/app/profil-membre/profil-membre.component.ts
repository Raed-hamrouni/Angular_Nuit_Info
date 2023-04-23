import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from '../shared/adherent.service';

@Component({
  selector: 'app-profil-membre',
  templateUrl: './profil-membre.component.html',
  styleUrls: ['./profil-membre.component.css']
})
export class ProfilMembreComponent implements OnInit {

  Adherent!: any;
  id:any;

  constructor( private route : ActivatedRoute,
    private adhServ: AdherentService) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
    
  this.adhServ.getAdherent(this.id).subscribe( data => {
    console.log(data);  
    this.Adherent = data;
  })
  }



}
