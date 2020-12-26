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
  isLoading = false;
  public userName: string;

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
  }

  logout() {
    try{
      this.isLoading = true;
      this.socialAuthService.signOut().then((res) => {
        this.router.navigate(['']);
      })
    } catch (e) {
      console.log(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
