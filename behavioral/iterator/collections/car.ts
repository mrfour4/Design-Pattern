import { CarIterator } from "../iterators/car";
import type { Vehicle } from "../vehicle";
import type { VehicleIterator } from "../vehicle-iterator";
import type { VehicleCollection } from "./vehicle-collection";

export class CarCollection implements VehicleCollection {
    private cars: Vehicle[] = [];

    add(car: Vehicle) {
        if (car.type === "car") this.cars.push(car);
    }

    createIterator(): VehicleIterator {
        return new CarIterator(this.cars);
    }
}
