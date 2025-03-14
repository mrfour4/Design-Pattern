import type { CarFactory } from "../car-factory";
import { EuropeanElectric } from "../concrete-products/electric";
import { EuropeanSedan } from "../concrete-products/sedan";
import { EuropeanSUV } from "../concrete-products/suv";
import type { Electric, Sedan, SUV } from "../products";

export class EuropeanCarFactory implements CarFactory {
    createSedan(): Sedan {
        return new EuropeanSedan();
    }
    createSUV(): SUV {
        return new EuropeanSUV();
    }
    createElectric(): Electric {
        return new EuropeanElectric();
    }
}
