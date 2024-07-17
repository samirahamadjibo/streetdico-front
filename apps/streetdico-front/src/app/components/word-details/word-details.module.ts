import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordDetailsComponent } from './word-details.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: WordDetailsComponent
  }
];

@NgModule({
  declarations: [WordDetailsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class WordDetailsModule { }
