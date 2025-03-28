import type { IrrigationSystem } from "../irrigation-system";

export class DripIrrigation implements IrrigationSystem {
    waterPlants(): void {
        console.log("Watering plants using drip irrigation.");
    }
}
