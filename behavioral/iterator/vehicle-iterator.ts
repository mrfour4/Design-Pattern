import { Vehicle } from "./vehicle";

export interface VehicleIterator {
    hasNext(): boolean;
    next(): Vehicle;
}
