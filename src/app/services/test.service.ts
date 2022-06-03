import { Injectable } from "@angular/core";
import { Car } from "../utils/models/car.model";
import { TCar } from "../utils/types/car.type";

@Injectable({ providedIn: 'root' })
export class TestService {
    car!: TCar;
}