import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent implements OnInit {

    reservations:any=[];

    constructor(private apiService:ApiService) { }

    ngOnInit(): void {
        let i = JSON.stringify({ selectedBy: 'All' });
        this.apiService.getReservations(i).subscribe((res :any) => {
            res.success ? this.reservations = res.Reservations : console.log(res.message) 
        });
    }

}
