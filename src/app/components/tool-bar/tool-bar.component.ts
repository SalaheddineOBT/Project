import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/utils/models/car.model';
import { ApiService } from 'src/app/services/api.service';
import { TestService } from 'src/app/services/test.service';
import { CarsComponent } from '../cars/cars.component';

@Component({
    selector: 'app-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.scss'],
    providers: [CarsComponent]
})

export class ToolBarComponent implements OnInit {

    @Input() car: Car;

    constructor(
        private fb: FormBuilder,
        private apiService: ApiService,
        private carsComp: CarsComponent,
        private router: Router,
        private routerAct: ActivatedRoute,
        public test: TestService
    ) {
        this.car = {
            Name: '',
            PlaceNumber: 0,
            DoorNumber: 0,
            Color: '',
            PricePerDay: '',
            Photo: '',
            Marque: '',
            Category: '',
            Description: ''
        };
    }

    searchTerm !: string;
    marques: any = [];
    categories: any = [];

    get Name() { return this.infoForm.get('name'); }
    get PlaceNumber() { return this.infoForm.get('placeNum'); }
    get DoorNumber() { return this.infoForm.get('doorNum'); }
    get Color() { return this.infoForm.get('color'); }
    get Price() { return this.infoForm.get('price'); }
    get Photo() { return this.infoForm.get('photo'); }
    get Category() { return this.infoForm.get('category'); }
    get Marque() { return this.infoForm.get('marque'); }
    get Description() { return this.infoForm.get('description'); }

    public imgPath = "../../../assets/images/imageImport.jpg";

    infoForm = this.fb.group({
        name: [''],
        placeNum: [''],
        doorNum: [''],
        color: [''],
        price: [''],
        photo: [''],
        marque: [''],
        description: [''],
        category: ['']
    })

    ngOnInit(): void {
        var i = JSON.stringify({ selectedBy: 'All' });
        this.apiService.getMarques(i).subscribe((res: any) => {
            // console.log(res.success);
            res.success ? this.marques = res.Marques : console.log(res.message);
        });
        this.apiService.getCategories(i).subscribe((res: any) => {
            res.success ? this.categories = res.Categories : console.log(res.message);
        });

        console.log(this.car);
    }

    changing(e: any) {
        // console.log(e.target.value);
        this.carsComp.filter('');
        this.searchTerm = (e.target as HTMLInputElement).value;
        this.apiService.search.next(this.searchTerm);
    }

    UploadImg(event: any) {
        var reader = new FileReader();
        reader.onload = (e) => {
            this.imgPath = (e.target as any).result;
        }

        // console.log((event.target as any).value);

        reader.readAsDataURL(event.target.files[0]);

        this.imgPath = event.target.files[0];
        // this.setState({img:this.inputfile.current.currentSrc});
    }

    AddCar() {
        console.log('clicked');
        this.clearForm();
    }
    navigateToreservations = () => this.router.navigate(['saves'], { relativeTo: this.routerAct });

    clearForm() {
        this.Name?.setValue('');
        this.PlaceNumber?.setValue('');
        this.DoorNumber?.setValue('');
        this.Color?.setValue('');
        this.Price?.setValue('');
        this.Photo?.setValue('');
        this.Category?.setValue('');
        this.Marque?.setValue('');
        this.Description?.setValue('');
        this.imgPath = "../../../assets/images/imageImport.jpg";
    }

}
