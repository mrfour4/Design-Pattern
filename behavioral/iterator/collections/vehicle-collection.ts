import type { VehicleIterator } from "../vehicle-iterator";

export interface VehicleCollection {
    createIterator(): VehicleIterator;
}
