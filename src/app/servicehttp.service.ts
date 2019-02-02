import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServicehttpService {

  private isUserLoggedIn;
  public username;

  constructor(){
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn = true;
    this.username = 'admin';
  }

  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
  

  
}
