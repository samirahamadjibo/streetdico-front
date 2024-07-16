import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { WordDetailsComponent } from './components/word-details/word-details.component';
import { AddWordComponent } from './components/add-word/add-word.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'account', component: AccountComponent},
  { path: 'word-details', component: WordDetailsComponent},
  { path: 'add-word', component: AddWordComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
