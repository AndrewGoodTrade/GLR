import { Component, OnInit } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
@Component({
  selector: 'glr-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isLoading = false;

  constructor(
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    try{
      this.isLoading = true;
      this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((res) => {
        console.log(res);
      })
    } catch (e) {
      console.log(e.error.message);
    } finally {
      this.isLoading = false;
    }
  }
}
