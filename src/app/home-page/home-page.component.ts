import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'glr-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public userName: string;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
  }

  logout(): void {
    this.authService.SignOut();
  }

}
