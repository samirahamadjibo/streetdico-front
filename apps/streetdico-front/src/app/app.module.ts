import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderSimpleComponent } from './components/shared/headers/header-simple/header-simple.component';
import { HeaderHomeComponent } from './components/shared/headers/header-home/header-home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { DefinitionFormComponent } from './components/add-definition-form/add-definition-form.component';
import { LastPublishersComponent } from './components/shared/last-publishers/last-publishers.component';
import { AccountComponent } from './components/account/account.component';
import { SecondarySearchFieldComponent } from './components/shared/secondary-search-field/secondary-search-field.component';
import { TrendingWordsComponent } from './components/shared/trending-words/trending-words.component';
import { AddWordFormComponent } from './components/shared/add-word-form/add-word-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderSimpleComponent,
    HeaderHomeComponent,
    FooterComponent,
    AccountComponent,
    DefinitionFormComponent,
    LastPublishersComponent,
    SecondarySearchFieldComponent,
    TrendingWordsComponent,
    AddWordFormComponent,
    SearchBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatDialogModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
