import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { ApiService } from 'src/app/services/api.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FilterPipeModule } from 'src/app/pipes/filter/filter.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarAlertModule } from '../car-alert/car-alert.module';



@NgModule({
    declarations: [
        CarsComponent,
    ],
    imports: [
        CommonModule,
        NgbModule,
        CarouselModule,
        CarAlertModule,
        FilterPipeModule
    ],
    providers: [ApiService],
    exports: [CarsComponent]
})
export class CarsModule { }
