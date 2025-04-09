import { TrafficManager } from "./client";
import { BusCollection } from "./collections/bus";
import { CarCollection } from "./collections/car";
import { TruckCollection } from "./collections/truck";
import { Vehicle } from "./vehicle";

export class IteratorBehavioral {
    static main(): void {
        const bus1 = new Vehicle("1", "bus", "51A-12345", 45, "Mercedes");
        const bus2 = new Vehicle("2", "bus", "51B-67890", 30, "Hyundai");

        const truck1 = new Vehicle("3", "truck", "60C-11111", 8, "Isuzu");
        const truck2 = new Vehicle("4", "truck", "60C-22222", 15, "Hino");

        const car1 = new Vehicle("5", "car", "30E-33333", 5, "Toyota");
        const car2 = new Vehicle("6", "car", "30E-44444", 5, "BMW");
        const car3 = new Vehicle("7", "car", "30E-55555", 5, "Audi");

        const busCollection = new BusCollection();
        busCollection.add(bus1);
        busCollection.add(bus2);

        const truckCollection = new TruckCollection();
        truckCollection.add(truck1);
        truckCollection.add(truck2);

        const carCollection = new CarCollection();
        carCollection.add(car1);
        carCollection.add(car2);
        carCollection.add(car3);

        console.log("=== BUS LIST ===");
        TrafficManager.printVehicles(busCollection);

        console.log("\n=== TRUCK LIST (capacity > 10) ===");
        TrafficManager.printVehicles(truckCollection);

        console.log("\n=== CAR LIST (sorted by manufacturer) ===");
        TrafficManager.printVehicles(carCollection);
    }
}
