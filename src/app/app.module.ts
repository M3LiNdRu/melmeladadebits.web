import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainBarComponent } from './main-bar/main-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainLogoComponent } from './main-logo/main-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBarComponent,
    FooterComponent,
    MainLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
