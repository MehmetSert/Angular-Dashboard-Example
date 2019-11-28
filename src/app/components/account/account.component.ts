import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
    const isLogged = this.accountService.isLoggedIn();
    if (isLogged) {
      this.router.navigate(['/dashboard']);
    }
  }

}
