import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { WordComponent } from './components/shared/units/word/word.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderSimpleComponent } from './components/shared/core/header-simple/header-simple.component';
import { HeaderHomeComponent } from './components/shared/core/header-home/header-home.component';
import { FooterComponent } from './components/shared/core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    HomeComponent,
    HeaderSimpleComponent,
    HeaderHomeComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, HttpClientModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
