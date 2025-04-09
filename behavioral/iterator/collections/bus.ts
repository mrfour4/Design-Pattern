import { BusIterator } from "../iterators/bus";
import type { Vehicle } from "../vehicle";
import type { VehicleIterator } from "../vehicle-iterator";
import type { VehicleCollection } from "./vehicle-collection";

export class BusCollection implements VehicleCollection {
    private buses: Vehicle[] = [];

    add(bus: Vehicle) {
        if (bus.type === "bus") this.buses.push(bus);
    }

    createIterator(): VehicleIterator {
        return new BusIterator(this.buses);
    }
}
