import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    //property / variable

    aim = 'your perfect banking partner'

    account ="enter your account number here"

    acno =''

    pswd =''



   //data base - bank
  
  userDetails:any = {
    1000:{acno:1000,username:'aswin',password:100,balance:10000},
    1001:{acno:1001,username:'ashal',password:101,balance:20000},
    1002:{acno:1002,username:'asal',password:102,balance:30000}

  }
   
  // constructor -
   
  constructor() { }

  //ngOnInit - Life Cylce Hook Of Angular


  ngOnInit(): void {
  }
  //user defined function 

  //acnoChange()

  acnoChange(event:any){
    this.acno =event.target.value
   console.log(this.acno)
   
}
 // passwordchange ()

pswdChange(event:any){
  this.pswd =event.target.value
 console.log(this.pswd)
 
}

  // login
//   login(){
//     var acno = this.acno
//     var pswd = this.pswd


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

// login - with 2 arg - template reference
login(a:any,p:any){
  var acno = a.value
  var pswd = p.value


  let userDetails = this.userDetails

  if(acno in userDetails){
     if(pswd == userDetails[acno].password){
      alert('login success')
     }
     else{
      alert('incoreect password')
     }
  }
  else{
    alert('user does not exist!!!!!')
  }
}
}

