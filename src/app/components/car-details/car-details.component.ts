import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
    selector: 'app-car-details',
    templateUrl: './car-details.component.html',
    styleUrls: ['./car-details.component.scss']
})
export class CarDetailsComponent implements OnInit {

    constructor(private routAct:ActivatedRoute,private apiService:ApiService) { }

    car:any={};

    ngOnInit(): void {
        let selected=JSON.stringify({selectedBy:'ById'});
        let id=this.routAct.snapshot.paramMap.get('id');
        this.apiService.getCar(id,selected).subscribe((res:any) => {
            res.success ? this.car=res.Car[0] : console.log(res.message)
        });
    }

}
