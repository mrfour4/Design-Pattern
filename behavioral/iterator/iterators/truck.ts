import type { Vehicle } from "../vehicle";
import type { VehicleIterator } from "../vehicle-iterator";

// filter capacity > 10
export class TruckIterator implements VehicleIterator {
    private index = 0;
    private filteredTrucks: Vehicle[];

    constructor(trucks: Vehicle[]) {
        this.filteredTrucks = trucks.filter((t) => t.capacity > 10);
    }

    hasNext(): boolean {
        return this.index < this.filteredTrucks.length;
    }

    next(): Vehicle {
        return this.filteredTrucks[this.index++];
    }
}
