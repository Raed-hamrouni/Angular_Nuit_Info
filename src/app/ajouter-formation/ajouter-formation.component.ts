import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SeanceService } from '../shared/seance.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {
  event:any=[]
  start:any
  formationForm!: FormGroup
  loginResponse:any
  constructor(  private router: Router,
    private fb: FormBuilder,
    private seanceService: SeanceService) { }
  ngOnInit(): void {
    this.formationForm= this.fb.group ( 
      {
        day:['',Validators.required],
        startTime:['',Validators.required],
        endTime:['',Validators.required],
        coach:['',Validators.required],  
      
        
      }

    )
  }
  createSeance() {
    
    let day=this.formationForm.controls.day.value;
    let startTime=this.formationForm.controls.startTime.value;
    let endTime=this.formationForm.controls.endTime.value;
    let coach=this.formationForm.controls.coach.value;
  
    
if(startTime<=endTime) 
{

    let form ={day,startTime,endTime,coach}
   
    this.seanceService.createSeance(form).subscribe((res) => {
      // window.location.reload();
      this.affiche()

      this.router.navigate(['/listeFormations']);

    });
 
    console.log();
    this.loginResponse=this.opensweetalert();
    window.setTimeout(function(){location.reload()},2000)
  }
else {
  console.log("thabete date");
  this.loginResponse=this.opensweetalert2();
}
}

affiche(){
  this.seanceService.getAllSeance().subscribe(
    res=>{
      this.event=res
      console.log("welcome",this.event);
      
    },
  )
}


  

   opensweetalert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Formation ajoutée avec succes ',
      showConfirmButton: false,
      timer: 3500
    })
   }
   
   opensweetalert2() {
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'Vérifier Les Données ',
      showConfirmButton: false,
      timer: 3500
    })
   }
}