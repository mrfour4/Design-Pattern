import type { CarFactory } from "./car-factory";
import type { Electric, Sedan, SUV } from "./products";

export class Application {
    private factory: CarFactory;
    private sedan: Sedan;
    private suv: SUV;
    private electric: Electric;

    constructor(factory: CarFactory) {
        this.factory = factory;
        this.sedan = this.factory.createSedan();
        this.suv = this.factory.createSUV();
        this.electric = this.factory.createElectric();
    }

    showCarDetails(): void {
        console.log("Sedan - Engine:", this.sedan.getEngine());
        console.log("Sedan - Seat:", this.sedan.getSeat());
        console.log("Sedan - Size:", this.sedan.getSize());

        console.log("SUV - Engine:", this.suv.getEngine());
        console.log("SUV - Seat:", this.suv.getSeat());
        console.log("SUV - Size:", this.suv.getSize());

        console.log("Electric - Engine:", this.electric.getEngine());
        console.log("Electric - Seat:", this.electric.getSeat());
        console.log("Electric - Size:", this.electric.getSize());
    }
}
