import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderSimpleComponent } from './headers/header-simple/header-simple.component';
import { HeaderHomeComponent } from './headers/header-home/header-home.component';
import { LastPublishersComponent } from './last-publishers/last-publishers.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SecondarySearchFieldComponent } from './secondary-search-field/secondary-search-field.component';
import { TrendingWordsComponent } from './trending-words/trending-words.component';
import { WordComponent } from './word/word.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddWordFormComponent } from './add-word-form/add-word-form.component';
import { AddWordComponent } from '../add-word/add-word.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AccountComponent } from '../account/account.component';
import { WordDetailsComponent } from '../word-details/word-details.component';

const routes: Routes = [
  { path: 'add-word', component: AddWordComponent },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'word-details', component: WordDetailsComponent }
];

@NgModule({
  declarations: [
    AddWordFormComponent,
    FooterComponent,
    HeaderSimpleComponent,
    HeaderHomeComponent,
    LastPublishersComponent,
    SearchBarComponent,
    SecondarySearchFieldComponent,
    TrendingWordsComponent,
    WordComponent,
    WordDetailsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    AddWordFormComponent,
    FooterComponent,
    HeaderSimpleComponent,
    HeaderHomeComponent,
    LastPublishersComponent,
    SearchBarComponent,
    SecondarySearchFieldComponent,
    TrendingWordsComponent,
    WordComponent,
    WordDetailsComponent
  ]
})
export class SharedModule { }
