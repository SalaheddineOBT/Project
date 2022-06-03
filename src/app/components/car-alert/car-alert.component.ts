import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TCar } from 'src/app/utils/types/car.type';

@Component({
    selector: 'app-car-alert',
    templateUrl: './car-alert.component.html',
    styleUrls: ['./car-alert.component.scss']
})
export class CarAlertComponent implements OnInit {

    infoForm!: FormGroup;

    car!: TCar | null;

    constructor(
        private fb: FormBuilder,
        private modal: NgbActiveModal
    ) {
        this.car = null;
    }

    ngOnInit(): void {
        this.initForm();
        console.log(this.car);
    }

    private initForm(): void {
        this.infoForm = this.fb.group({
            name: [this.car?.Name, [Validators.required, Validators.minLength(3)]],
            placeNum: [this.car?.PlaceNumber],
            doorNum: [this.car?.DoorNumber],
            color: [this.car?.Color],
            price: [this.car?.PricePerDay],
            photo: [this.car?.Photo],
            marque: [this.car?.Marque],
            description: [this.car?.Description],
            category: [this.car?.Category]
        })
    }

    isInvalid(key: string): boolean {
        return Boolean(this.infoForm.get(key)?.invalid && this.infoForm.get(key)?.touched);
    }

    onValidate(): void {
        if (this.infoForm.valid) {
            this.modal.close();
        }
    }
}
