import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponsableService } from '../shared/responsable.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inscription-responsable',
  templateUrl: './inscription-responsable.component.html',
  styleUrls: ['./inscription-responsable.component.css']
})
export class InscriptionResponsableComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  loginResponse:any


  responsableForm!: FormGroup
  constructor(  private ResponsableService: ResponsableService,
    private router: Router,
    private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.responsableForm= this.fb.group(
      {
        emailEnt:['',Validators.required],
        password:['',Validators.required],
        nomR:['',[Validators.required,Validators.minLength(3)]],
        nomClub:['',[Validators.required,Validators.minLength(3)]],
        telEnt:['',Validators.required],
        cycleR:['',Validators.required],
        niveauR:['',Validators.required],
        specialiteR:['',Validators.required],
        file:['',Validators.required],


      }

    )
  }

  createResponsable() {
    this.ResponsableService.createResponsable(this.responsableForm.value).subscribe((res) => {
      this.loginResponse=this.opensweetalert();
      this.router.navigate(['/acceuil']);
   
    });
    console.log(this.responsableForm.value)
  }

  onUpload(event:any){
    let fileClub: File
    let fd = new FormData()
    fileClub = <File> event.target.files[0];
    fd.append('file',fileClub,fileClub.name)
    this.ResponsableService.uploadFile(fd).subscribe((res: any) => {
      console.log(res);
      }, (err)=>{
        console.log(err); 
      })
      }

  opensweetalert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Registration has been saved',
      showConfirmButton: false,
      timer: 3500
    })
   }
   
}
