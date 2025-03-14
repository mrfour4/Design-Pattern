import type { Electric, Sedan, SUV } from "./products";

export interface CarFactory {
    createSedan(): Sedan;
    createSUV(): SUV;
    createElectric(): Electric;
}
