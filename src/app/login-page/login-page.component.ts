import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Router } from '@angular/router';

import { AuthService } from './../services/auth.service';

@Component({
  selector: 'glr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isLoading = false;

  constructor(
    private socialAuthService: SocialAuthService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    try{
      this.isLoading = true;
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((res) => {
        console.log(res);
        this.authService.setUserName(res.name);
        this.router.navigate(['home']);
      })
    } catch (e) {
      console.log(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
