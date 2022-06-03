import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarAlertComponent } from './car-alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    declarations: [
        CarAlertComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatRadioModule,
        NgbModule,
        BrowserModule,
    ],
    exports: [CarAlertComponent]
})
export class CarAlertModule { }
