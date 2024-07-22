import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { ShowAllWordsComponent } from './components/show-all-words/show-all-words.component';


const rootRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'account', component: AccountComponent},
  { path: 'add-word', component: AddWordComponent},
  { path: 'show-all', component: ShowAllWordsComponent},
  { path: 'word-details', loadChildren: () => import('./components/word-details/word-details.module').then(m => m.WordDetailsModule) }
];



@NgModule({
  imports: [ RouterModule.forRoot(rootRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
