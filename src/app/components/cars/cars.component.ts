import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent implements OnInit {

    cars:any = [];
    marques:any = [];
    page = 1;

    public filterMarques:any;

    searchKey:string = "";

    pageSize =6;

    constructor(private apiService:ApiService,private router:Router) { }

    ngOnInit(): void {
        var i=JSON.stringify({selectedBy:'All'});
        //this.apiService.getCars().subscribe(res => this.data = res);
        this.apiService.getCars(i).subscribe((res:any) =>{
            if(res.success){
                this.cars=res.Cars;
                this.filterMarques=res.Cars;
            }else{
                console.log(res.message);
            }
        });
        this.apiService.getMarques(i).subscribe((res:any)=>{
            // console.log(res.success);
            res.success ? this.marques=res.Marques : console.log(res.message);
        });

        this.apiService.search.subscribe((v : any) => {
            this.searchKey = v;
        });
    }

    customOptions: OwlOptions = {
        loop: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 3
            },
            400: {
                items: 4
            },
            700: {
                items: 5
            },
            940: {
                items: 8
            }
        },
        nav: false
    };

    public filter(marque:string){
        this.filterMarques = this.cars.filter((a : any) => {
            if(a.Marque == marque || marque === ''){
                return a;
            }
        });
    };

    public navigateToDerail(id:any){
        this.router.navigate(['/details',id]);
    }

}
