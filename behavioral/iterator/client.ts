import type { VehicleCollection } from "./collections/vehicle-collection";

export class TrafficManager {
    static printVehicles(collection: VehicleCollection): void {
        const iterator = collection.createIterator();

        while (iterator.hasNext()) {
            const vehicle = iterator.next();
            console.log(
                `[${vehicle.type.toUpperCase()}] ${vehicle.licensePlate} - ${
                    vehicle.manufacturer
                } (${vehicle.capacity})`
            );
        }
    }
}
