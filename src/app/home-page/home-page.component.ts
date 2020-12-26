import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from './../provider/auth.service';

@Component({
  selector: 'glogin-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
