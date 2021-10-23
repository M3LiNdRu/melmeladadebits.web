import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainBarComponent } from './main-bar/main-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainLogoComponent } from './main-logo/main-logo.component';
import { FloatingBoxComponent } from './floating-box/floating-box.component';
import { ContainerComponent } from './container/container.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainBarComponent,
    FooterComponent,
    MainLogoComponent,
    FloatingBoxComponent,
    ContainerComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HighlightModule
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        go: () => import('highlight.js/lib/languages/go'),
      }
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
