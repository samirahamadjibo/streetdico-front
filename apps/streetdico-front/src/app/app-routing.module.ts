import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { AccountComponent } from './components/account/account.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
