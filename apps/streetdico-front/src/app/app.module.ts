import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderSimpleComponent } from './components/shared/core/header-simple/header-simple.component';
import { HeaderHomeComponent } from './components/shared/core/header-home/header-home.component';
import { FooterComponent } from './components/shared/core/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderSimpleComponent,
    HeaderHomeComponent,
    FooterComponent,
    AccountComponent,
  ],
  imports: [BrowserModule, HttpClientModule, MatIconModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
