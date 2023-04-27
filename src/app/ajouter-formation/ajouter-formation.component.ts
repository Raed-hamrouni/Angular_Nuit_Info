import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { FormationService } from '../shared/formation.service';
@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {
  event:any=[]
  start:any
  file:any
  formationForm!: FormGroup
  loginResponse:any
  constructor(  private router: Router,
    private fb: FormBuilder,
    private formationService: FormationService) { }
  ngOnInit(): void {
    this.formationForm= this.fb.group ( 
      {
        title:['',Validators.required],
        date:['',Validators.required],
        heure:['',Validators.required],
        date_fin:['',Validators.required],  
        duree:['',Validators.required],
        formateur:['',Validators.required],
        prix:['',Validators.required],
        lieu:['',Validators.required],
        file:[''],
        
      }

    )
  }

  

  // createFormation() {
  // this.formationService.createFormation(this.formationForm.value).subscribe((res) => {
   
  //   this.loginResponse=this.opensweetalert();
  //   this.router.navigate(['/listeFormations']);   
  // },
  // error => {
  //   this.loginResponse=this.opensweetalert2();
  // });

  // }

  createFormation() {
    
    let title=this.formationForm.controls.title.value;
    let heure=this.formationForm.controls.heure.value;
    let date_fin=this.formationForm.controls.date_fin.value;
    let duree=this.formationForm.controls.duree.value;
    let formateur=this.formationForm.controls.formateur.value;
    let prix=this.formationForm.controls.prix.value;
    let lieu=this.formationForm.controls.lieu.value;
    let file=this.formationForm.controls.file.value;
    let date=this.formationForm.controls.date.value;
if(date<=date_fin) 
{

    let form ={title,heure,date,date_fin,duree,formateur,prix,lieu,file}
   
    this.formationService.createFormation(form).subscribe((res) => {
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
  this.formationService.getAllFormation().subscribe(
    res=>{
      this.event=res
      console.log("welcome",this.event);
      
    },
  )
}


  onUpload(event:any){
    let file: File
    let fd = new FormData()
    file = <File> event.target.files[0];
    fd.append('file',file,file.name)
    this.formationService.uploadFile(fd).subscribe((res: any) => {
      console.log(res);
      }, (err)=>{
        console.log(err); 
      })
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
      title: 'Les donneessss 8alet',
      showConfirmButton: false,
      timer: 3500
    })
   }
}