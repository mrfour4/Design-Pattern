import type { ControlSystem } from "./control-system";
import type { IrrigationSystem } from "./irrigation-system";

export class IrrigationManager {
    protected irrigationSystem: IrrigationSystem;
    protected controlSystem: ControlSystem;

    constructor(
        irrigationSystem: IrrigationSystem,
        controlSystem: ControlSystem
    ) {
        this.irrigationSystem = irrigationSystem;
        this.controlSystem = controlSystem;
    }

    operate(): void {
        this.controlSystem.control();
        this.irrigationSystem.waterPlants();
    }
}
