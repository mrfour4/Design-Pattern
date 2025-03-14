import type { CarFactory } from "./car-factory";
import { AsianCarFactory } from "./factory/asian";
import { EuropeanCarFactory } from "./factory/european";
import { Application } from "./main";

export class AbstractCreation {
    static main(): void {
        const region = "Europe";

        let factory: CarFactory;

        if (region === "Europe") {
            factory = new EuropeanCarFactory();
        } else if (region === "Asia") {
            factory = new AsianCarFactory();
        } else {
            throw new Error("Khu vực không xác định!");
        }

        const app = new Application(factory);
        app.showCarDetails();
    }
}
