import { Component, OnInit } from '@angular/core';
import { ResponsableService } from '../services/responsable.service';

@Component({
  selector: 'app-profil-coach',
  templateUrl: './profil-coach.component.html',
  styleUrls: ['./profil-coach.component.css']
})
export class ProfilCoachComponent implements OnInit {
  Responsable!: any;
  id:any;

  constructor(
    private responsableService: ResponsableService
  ) { }


  ngOnInit(): void {
    this. id =(localStorage.getItem('CurrentUser') || '');
    this.responsableService.getResponsable(this.id).subscribe( data => {
      console.log(data);
      this.Responsable = data;
    })
  }

}
