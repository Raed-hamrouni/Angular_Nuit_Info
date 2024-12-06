import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  token: any;

  loginResponse: any;

  public showPassword!: boolean;
  public showPasswordOnPress!: boolean;
  constructor(private router: Router, private fb: FormBuilder, private adminServ: AdminService, private authServ: AuthService,) {

    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern(
          "^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$"
        ),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    }

    this.loginForm = this.fb.group(formControls)
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }


  ngOnInit(): void {


  }
  test() {
    console.log(this.loginForm.value);


  }

  login() {
    this.adminServ.login(this.loginForm.value).subscribe((res: any) => {

      //coach
      if (res.admin.role == "responsable") {
        this.authServ.Login(res.admin, res.token);
        localStorage.setItem('CurrentUser', res.admin._id)
        this.router.navigate(["/profilCoach"]);
      }

      /////adherent
      else if (res.admin.role == "Adherent") {
        this.router.navigate(["/espaceMembre"]);

        this.authServ.Login(res.admin.role, res.token);
        localStorage.setItem('CurrentUser', res.admin._id)
      }


      else {
        this.router.navigate(["/profilCoach"]);
        this.authServ.Login(res.admin, res.token);
        localStorage.setItem('CurrentUser', res.admin._id)
      }

    }, err => {
      console.log("Invalid password or Email");
      this.loginResponse = this.opensweetalert();

    })

  }
  opensweetalert() {
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'Invalid email or password',
      showConfirmButton: false,
      timer: 3500
    })
   }


}
