import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ActiveModule } from './active/active.module';
import { DeletedModule } from './deleted/deleted.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ActiveModule, DeletedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
