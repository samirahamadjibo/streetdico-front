import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { DefinitionFormComponent } from './components/add-definition-form/add-definition-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'account', component: AccountComponent},
  { path: 'rajouter-une-definition', component: DefinitionFormComponent},


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
