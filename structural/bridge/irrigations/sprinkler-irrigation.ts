import type { IrrigationSystem } from "../irrigation-system";

export class SprinklerIrrigation implements IrrigationSystem {
    waterPlants(): void {
        console.log("Watering plants using sprinkler irrigation.");
    }
}
