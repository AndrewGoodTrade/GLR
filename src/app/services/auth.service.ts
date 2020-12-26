import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userName: string;

  constructor() { }

  setUserName (param: string) {
    this.userName = param;
  }

  getUserName () {
    return this.userName;
  }
}
