import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loggedInUser;
  public isUserLogged= false;

  constructor() { }

  setAuthUser(user) {
    console.log(user.login)
    this.loggedInUser = user.login
    this.isUserLogged=true;
  }

  getAuthUser() {
    return this.loggedInUser;
  }

  isLoggedIn() {
    return this.isUserLogged;
  }

  logoutUser() {
    console.log("logggggggg")
    this.isUserLogged= false;
    this.loggedInUser='';
  }

}
