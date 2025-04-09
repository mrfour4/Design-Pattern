import type { Vehicle } from "../vehicle";
import type { VehicleIterator } from "../vehicle-iterator";

export class BusIterator implements VehicleIterator {
    private index = 0;

    constructor(private buses: Vehicle[]) {}

    hasNext(): boolean {
        return this.index < this.buses.length;
    }

    next(): Vehicle {
        return this.buses[this.index++];
    }
}
