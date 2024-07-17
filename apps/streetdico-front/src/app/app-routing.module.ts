import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AddWordComponent } from './components/add-word/add-word.component';


const rootRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'account', component: AccountComponent},
  { path: 'add-word', component: AddWordComponent}
];

const lazyLoadedRoutes: Routes = [
  { path: 'word-details', loadChildren: () => import('./components/word-details/word-details.module').then(m => m.WordDetailsModule) },
];

@NgModule({
  imports: [ RouterModule.forRoot(rootRoutes), RouterModule.forChild(lazyLoadedRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
