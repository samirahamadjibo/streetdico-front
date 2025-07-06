import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { ShowAllWordsComponent } from './components/show-all-words/show-all-words.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WordDetailsComponent } from './components/word-details/word-details.component';


const rootRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'account', component: AccountComponent},
  { path: 'add-word', component: AddWordComponent},
  { path: 'show-all', component: ShowAllWordsComponent},
  { path: 'search', component: SearchPageComponent},
  { path: 'word-details', component: WordDetailsComponent},
  { path: '**', component: PageNotFoundComponent}
];



@NgModule({
  imports: [ RouterModule.forRoot(rootRoutes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
