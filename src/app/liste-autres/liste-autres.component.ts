import { Component, OnInit } from '@angular/core';
import { ResponsableService } from '../services/responsable.service';


@Component({
  selector: 'app-liste-autres',
  templateUrl: './liste-autres.component.html',
  styleUrls: ['./liste-autres.component.css']
})
export class ListeAutresComponent implements OnInit {

  p : number=1;
  id:any;
  responsable:any;
  Responsable!:any;
  constructor( private responsableService: ResponsableService) { }

  ngOnInit(): void {
    this.affiche()
     this.responsable = localStorage.getItem('CurrentUser');
    console.log(this.id);
    this.responsableService.getResponsable(this.id).subscribe( data => {
      console.log(data);
      this.Responsable = data;
    }) 
  }

  affiche(){
    this.responsableService.getAllResponsable().subscribe(
      res=>{
        this.Responsable=res
      },
    )
  }

}
