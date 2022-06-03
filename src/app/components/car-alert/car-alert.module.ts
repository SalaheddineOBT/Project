import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarAlertComponent } from './car-alert.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        CarAlertComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [CarAlertComponent]
})
export class CarAlertModule { }
