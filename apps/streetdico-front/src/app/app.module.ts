import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { AddWordComponent } from './components/add-word/add-word.component';
import { SharedModule } from './components/shared/shared.module';
import { WordDetailsModule } from './components/word-details/word-details.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    AddWordComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    WordDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
