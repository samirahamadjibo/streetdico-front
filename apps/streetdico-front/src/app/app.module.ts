import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WordComponent } from './components/shared/units/word/word.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [AppComponent, WordComponent, HomeComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
