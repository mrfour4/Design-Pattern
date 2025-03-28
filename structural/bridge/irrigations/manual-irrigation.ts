import type { IrrigationSystem } from "../irrigation-system";

export class ManualIrrigation implements IrrigationSystem {
    waterPlants(): void {
        console.log("Watering plants manually.");
    }
}
