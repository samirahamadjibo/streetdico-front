import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WordComponent } from './components/shared/units/word/word.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderSimpleComponent } from './components/shared/core/header-simple/header-simple.component';
import { HeaderHomeComponent } from './components/shared/core/header-home/header-home.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    HomeComponent,
    HeaderSimpleComponent,
    HeaderHomeComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
