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
import { UserComponent } from './components/user/user.component';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderSimpleComponent,
    HeaderHomeComponent,
    FooterComponent,
    UserComponent,
    RouterOutlet,
  ],
  imports: [BrowserModule, HttpClientModule, MatIconModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
