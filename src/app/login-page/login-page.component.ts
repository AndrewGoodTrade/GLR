import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../provider/auth.service';

@Component({
  selector: 'glogin-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['']);
    })
  }

}