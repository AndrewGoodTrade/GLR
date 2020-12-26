import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public socialAuthService: SocialAuthService,
  ) { }

  loginWithGoogle() {
    return this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logout() {
    return this.socialAuthService.signOut();
  }
}
