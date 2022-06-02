import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../classes/car.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

    private _url="http://localhost:3000/cars";

    public search = new BehaviorSubject<string>("");

    constructor(private httpClient:HttpClient) { };

    getCarss(){
        return this.httpClient.get<Car[]>(this._url);
    };

    uri="https://rumbustious-hilltop.000webhostapp.com/API/Operations/";

    getCars(car:any){
        return this.httpClient.post(this.uri+"Cars/cars.php",car);
    };

    getMarques(marque:any){
        return this.httpClient.post(this.uri+"Marques/marques.php",marque);
    };

    getCar(id:any,selected:any){
        return this.httpClient.post(this.uri+`Cars/cars.php?id=${id}`,selected);
    };



}
