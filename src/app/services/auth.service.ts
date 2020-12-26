import { GoogleLoginProvider } from 'angularx-social-login';
import { auth } from 'firebase/app';
import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userName: string;

  constructor(
    private db: AngularFireDatabase,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) { }

  getUserName(): string {
    return this.userName;
  }

  GoogleAuth(): any {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider): any {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        if ( result.user.email === 'andrewgood.trade@gmail.com' || result.user.email === '105.olivesoft@gmail.com' ) {
          this.ngZone.run(() => {
            this.router.navigate(['home']);
          });
          this.setUserName(result.user);
        }
      }).catch((error) => {
        window.alert(error);
      });
  }

  SignOut(): any {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['']);
    });
  }

  setUserName(user: any): void {
    this.userName = user.displayName;
    const registerUser = {
      username: this.userName
    };
    const userRef = this.db.list('Users');
    userRef.push(registerUser);
  }
}
