import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AccountService} from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) {}

  canActivate() {
    const isLogged = this.accountService.isLoggedIn();
    if (isLogged) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
  
}
