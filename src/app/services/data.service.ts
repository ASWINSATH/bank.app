import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //login

  currentUser: any

  //login acno

  currentAcno: any

  userDetails: any = {
    1000: { acno: 1000, username: 'aswin', password: 100, balance: 10000, transaction: [] },
    1001: { acno: 1001, username: 'ashal', password: 101, balance: 20000, transaction: [] },
    1002: { acno: 1002, username: 'asal', password: 102, balance: 30000, transaction: [] }

  }

  constructor(private http: HttpClient) {
    this.getDetails()
  }

  //saveDetails() - to store data in Local storage
  saveDetails() {
    //database
    if (this.userDetails) {
      localStorage.setItem('dataBase', JSON.stringify(this.userDetails))
    }
    if (this.currentAcno) {
      localStorage.setItem('currentAcno', JSON.stringify(this.currentAcno))
    }
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))

    }
  }

  //get data from local storage

  getDetails() {
    //get database
    if (localStorage.getItem('database')) {
      this.userDetails = JSON.parse(localStorage.getItem('database') || '')
    }
    //get currentacno
    if (localStorage.getItem('currentAcno')) {
      this.currentAcno = JSON.parse(localStorage.getItem('currentAcno') || '')
    }


    //get current user
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '')
    }
  }

  //register 


  register(acno: any, username: any, password: any) {

    //req body 
    const data = {
      acno,
      username,
      password
    }

    //register api - asynchronous 
    return this.http.post(

      'http://localhost:3001/register', data)
  }



  //Login


  login(acno: any, pswd: any) {

    let userDetails = this.userDetails

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        this.currentUser = userDetails[acno]['username']
        this.currentAcno = acno
        this.saveDetails()


        return true

      }
      else {
        alert('incoreect password')
        return false
      }
    }
    else {
      alert('user does not exist!!!!!')
      return false
    }
  }

  //Deposit

  deposit(acno: any, pswd: any, amt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amt)

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        userDetails[acno]['balance'] += amount
        userDetails[acno]['transaction'].push({
          type: 'CREDIT',
          amount

        })
        this.saveDetails()


        return userDetails[acno]['balance']
      }
      else {
        alert('Incorrect password')
        return false
      }
    }
    else {
      alert('user does not exist')
      return false
    }

  }

  //withdraw

  withdraw(acno: any, pswd: any, amt: any) {
    let userDetails = this.userDetails
    var amount = parseInt(amt)

    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        if (userDetails[acno]['balance'] >= amount) {
          userDetails[acno]['balance'] -= amount
          userDetails[acno]['transaction'].push({
            type: 'DEBIT',
            amount
          })
          this.saveDetails()

          console.log(userDetails);


          return userDetails[acno]['balance']
        }
        else {
          alert('Incorrect password')
          return false
        }
      }
      else {
        alert('user does not exist')
        return false
      }

    }
  }
  //transaction 

  getTranscation(acno: any) {
    return this.userDetails[acno]['transaction']
  }

}
