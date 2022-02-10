import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBoxComponent } from './shared/app-box/app-box.component';
import { HomeComponent } from './pages/home/home.component';
import { LinksComponent } from './pages/links/links.component';
import { ReferencesComponent } from './pages/references/references.component';
import { NextComponent } from './pages/next/next.component';

@NgModule({
  declarations: [
    AppComponent,
    AppBoxComponent,
    HomeComponent,
    LinksComponent,
    ReferencesComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
