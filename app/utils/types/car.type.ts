import { Car } from "src/app/utils/models/car.model";

export type TCar = { [k in keyof Car]: any };
