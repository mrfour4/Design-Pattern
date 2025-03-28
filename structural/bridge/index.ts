import { AutomaticControl } from "./controls/auto-control";
import { ManualControl } from "./controls/manual-control";
import { IrrigationManager } from "./irrigation-manager";
import { DripIrrigation } from "./irrigations/drip-irrigation";
import { ManualIrrigation } from "./irrigations/manual-irrigation";
import { SprinklerIrrigation } from "./irrigations/sprinkler-irrigation";

export class BridgePattern {
    static main(): void {
        const system1 = new IrrigationManager(
            new DripIrrigation(),
            new ManualControl()
        );
        const system2 = new IrrigationManager(
            new SprinklerIrrigation(),
            new AutomaticControl()
        );
        const system3 = new IrrigationManager(
            new ManualIrrigation(),
            new ManualControl()
        );

        console.log("System 1:");
        system1.operate();

        console.log("\nSystem 2:");
        system2.operate();

        console.log("\nSystem 3:");
        system3.operate();
    }
}
