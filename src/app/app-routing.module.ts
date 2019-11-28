import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountComponent} from './components/account/account.component';
import {LoginComponent} from './components/account/login/login.component';
import {RegisterComponent} from './components/account/register/register.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {StartComponent} from './components/dashboard/start/start.component';
import {UsersComponent} from './components/dashboard/users/users.component';
import {SettingsComponent} from './components/dashboard/settings/settings.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AuthGuard} from './services/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: StartComponent },
      { path: 'users', component: UsersComponent },
      { path: 'settings', component: SettingsComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
