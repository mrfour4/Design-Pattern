import type { Vehicle } from "../vehicle";
import type { VehicleIterator } from "../vehicle-iterator";

// sorted by manufacturer
export class CarIterator implements VehicleIterator {
    private index = 0;
    private sortedCars: Vehicle[];

    constructor(cars: Vehicle[]) {
        this.sortedCars = [...cars].sort((a, b) =>
            a.manufacturer.localeCompare(b.manufacturer)
        );
    }

    hasNext(): boolean {
        return this.index < this.sortedCars.length;
    }

    next(): Vehicle {
        return this.sortedCars[this.index++];
    }
}
