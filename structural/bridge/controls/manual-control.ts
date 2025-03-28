import type { ControlSystem } from "../control-system";

export class ManualControl implements ControlSystem {
    control(): void {
        console.log("Controlling irrigation manually.");
    }
}
