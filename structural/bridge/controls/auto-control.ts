import type { ControlSystem } from "../control-system";

export class AutomaticControl implements ControlSystem {
    control(): void {
        console.log("Controlling irrigation automatically.");
    }
}
