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
import { ApiService } from './services/api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarsModule } from './components/cars/cars.module';
import { FilterPipeModule } from './pipes/filter/filter.module';
import { ToolBarModule } from './components/tool-bar/tool-bar.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AccountComponent,
    FirstpgComponent,
    HeaderComponent
  ],
  imports: [
    CarouselModule ,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FilterPipeModule,
    HttpClientModule,
    CarsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
      ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
