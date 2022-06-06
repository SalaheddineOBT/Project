import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { TestService } from 'src/app/services/test.service';
import { CarsComponent } from '../cars/cars.component';
import { TCar } from 'src/app/utils/types/car.type';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarAlertComponent } from '../car-alert/car-alert.component';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.scss'],
    providers: [CarsComponent]
})

export class ToolBarComponent implements OnInit {

    car !:TCar | null;

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private carsComp: CarsComponent,
        private router: Router,
        private routerAct: ActivatedRoute,
        public test: TestService,
        public model:NgbModal
    ) {
        this.car=null;
    }

    searchTerm !: string;

    infoForm:any

    ngOnInit(): void {

        this.infoForm = this.fb.group({
            name: [this.car?.Name, [Validators.required, Validators.minLength(3)]],
            placeNum: [this.car?.PlaceNumber, [Validators.required, Validators.minLength(2)]],
            doorNum: [this.car?.NumbreDoors, [Validators.required, Validators.minLength(2)]],
            color: [this.car?.Color,Validators.required],
            price: [this.car?.PricePerDay, [Validators.required, Validators.minLength(1)]],
            photo: [this.car?.Photo,Validators.required],
            marque: [this.car?.Marque,Validators.required],
            description: [this.car?.Description,Validators.required],
            category: [this.car?.Categorie,Validators.required],
            km: [this.car?.Km,Validators.required],
            bagsNumber: [this.car?.Bags,Validators.required],
            fuel: [this.car?.Fuel,Validators.required],
            options:this.fb.group({
                blutooth:[this.car?.Blutooth],
                aircond:[this.car?.Aircond],
                airbag:[this.car?.Airbag],
                gps:[this.car?.Gps]
            })
        });
    }

    changing(e: any) {
        // console.log(e.target.value);
        this.carsComp.filter('');
        this.searchTerm = (e.target as HTMLInputElement).value;
        this.apiService.search.next(this.searchTerm);
    }

    public onCarAdd(): void {
        const modal = this.model.open(CarAlertComponent)
        this.test.methode="Add";
        console.log(this.infoForm.value)
        modal.componentInstance.car = this.infoForm.value;
        //console.log({ modal })
    }

}
