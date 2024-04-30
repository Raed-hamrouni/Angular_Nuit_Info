import { Component, OnInit } from '@angular/core';
import { ResponsableService } from '../shared/responsable.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
interface responsable {
  id:number;
  nom:string;
  prenom:string;
  email:string;

}
@Component({
  selector: 'app-liste-autres',
  templateUrl: './liste-autres.component.html',
  styleUrls: ['./liste-autres.component.css']
})
export class ListeAutresComponent implements OnInit {

  p : number=1;
  router: any;
  id:any;
  responsable:any;
  Responsable!:any;
  term!: string;
  searchTerm!: string;
  constructor( private responsableService: ResponsableService,
    private route : ActivatedRoute,
    private http: HttpClient,) { }

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
