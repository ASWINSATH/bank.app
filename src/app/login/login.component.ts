import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //property / variable

  aim = 'your perfect banking partner'

  account = "enter your account number here"

  acno = ''

  pswd = ''





  //login model

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  // constructor -

  constructor(private fb: FormBuilder, private router: Router, private ds: DataService) { }

  //ngOnInit - Life Cylce Hook Of Angular

  ngOnInit(): void {
  }
  //user defined function 

  //acnoChange()

  acnoChange(event: any) {
    this.acno = event.target.value
    console.log(this.acno)

  }
  // passwordchange ()

  pswdChange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd)

  }

  // login

  login() {
    var acno = this.loginForm.value.acno
    var pswd = this.loginForm.value.pswd

    
    if(this.loginForm.valid){
      //login data service - asynchronous
      this.ds.login(acno,pswd)
      .subscribe(
        (result:any)=>{
          alert(result.message)
          this.router.navigateByUrl('dashboard')
        },
        reslut=>{
          alert(result.error.message)
        }
      )
      const result = this.ds.login(acno, pswd)
      if (result) {
        alert('login successful')
        this.router.navigateByUrl('dashboard')
      }

    }
    else{
      alert('Invalid Form')
    }
   
  }


  //login with 2 arg-template reference
  //  login(a:any,p:any){
  //     var acno = a.value
  //     var pswd = p.value


  //     let userDetails = this.userDetails

  //     if(acno in userDetails){
  //        if(pswd == userDetails[acno].password){
  //         alert('login success')
  //        }
  //        else{
  //         alert('incoreect password')
  //        }
  //     }
  //     else{
  //       alert('user does not exist!!!!!')
  //     }
  //   }
  // }


}
