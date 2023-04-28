import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdherentService } from '../shared/adherent.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  // selectedClubs = {
    
  // };

  // clubs: Array<any> = [
  //   { value: 'Arsii', label: 'Arsii' },
  //   { value: 'Enactus', label: 'Enactus' },
  //   { value: 'Securinets', label: 'Securinets' },
  //   { value: 'Fancom', label: 'Fancom' },
  //   { value: '3zéro', label: '3zero' }
  // ];
  adherentForm!: FormGroup
  loginResponse:any
  constructor(  private router: Router,
    private fb: FormBuilder,
    private adhServ: AdherentService) {
      this.adherentForm = fb.group({
        selectedClubs:  new FormArray([])
       });
     }
  ngOnInit(): void {
    this.adherentForm= this.fb.group ( 
      {
        email:['',Validators.required],
        password:['',Validators.required],
        nom:['',Validators.required],
        prenom:['',Validators.required],  
        civilite:['',Validators.required],
        niveau:['',Validators.required],
        cycle:['',Validators.required],
        telephone:['',Validators.required],
        specialite:['',Validators.required],
        club:[''],
        file:[''],
      }

    )
  }

  
  createAdherent() {
  this.adhServ.createAdherent(this.adherentForm.value).subscribe((res) => {
    this.loginResponse=this.opensweetalert();
    this.router.navigate(['/acceuil']);   
  },
  error => {
    this.loginResponse=this.opensweetalert2();
  });

  }
  onUpload(event:any){
    let file: File
    let fd = new FormData()
    file = <File> event.target.files[0];
    fd.append('file',file,file.name)
    this.adhServ.uploadFile(fd).subscribe((res: any) => {
      console.log(res);
      }, (err)=>{
        console.log(err); 
      })
      }
  

   opensweetalert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Registration has been Saved',
      showConfirmButton: false,
      timer: 3500
    })
   }
   
   opensweetalert2() {
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'Email already Exists',
      showConfirmButton: false,
      timer: 3500
    })
   }
}
