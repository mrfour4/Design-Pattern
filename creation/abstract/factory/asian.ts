import type { CarFactory } from "../car-factory";
import { AsianElectric } from "../concrete-products/electric";
import { AsianSedan } from "../concrete-products/sedan";
import { AsianSUV } from "../concrete-products/suv";
import type { Electric, Sedan, SUV } from "../products";

export class AsianCarFactory implements CarFactory {
    createSedan(): Sedan {
        return new AsianSedan();
    }
    createSUV(): SUV {
        return new AsianSUV();
    }
    createElectric(): Electric {
        return new AsianElectric();
    }
}
