import { TruckIterator } from "../iterators/truck";
import type { Vehicle } from "../vehicle";
import type { VehicleIterator } from "../vehicle-iterator";
import type { VehicleCollection } from "./vehicle-collection";

export class TruckCollection implements VehicleCollection {
    private trucks: Vehicle[] = [];

    add(truck: Vehicle) {
        if (truck.type === "truck") this.trucks.push(truck);
    }

    createIterator(): VehicleIterator {
        return new TruckIterator(this.trucks);
    }
}
