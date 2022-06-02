import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-owl-carousel-o';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AccountComponent } from './components/account/account.component';
import { FirstpgComponent } from './components/firstpg/firstpg.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { ApiService } from './services/api.service';
import { FilterPipe } from './shared/filter.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AccountComponent,
    FirstpgComponent,
    HeaderComponent,
    ToolBarComponent,
    FilterPipe
  ],
  imports: [
    CarouselModule ,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
      ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
