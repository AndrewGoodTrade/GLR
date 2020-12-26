import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './provider/auth.service';

@Component({
  selector: 'glogin-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(
    public authService: AuthService,
    private router: Router
  ){
    this.authService.af.auth.subscribe((auth) => {
      if (auth == null) {
        console.log('Logged out');
        this.isLoggedIn = false;
        this.user_displayName = '';
        this.user_email = '';
        this.router.navigate(['Login']);
      } else {
        this.isLoggedIn = true;
        this.user_displayName = auth.google.displayName;
        this.user_email = auth.google.email;
        console.log('Logged in');
        console.log(auth);
        this.router.navigate(['']);
      }
    });
  }
}
