import { Food } from "../food";

export class Pizza extends Food {
    prepare(): void {
        console.log("Preparing dough, adding sauce and cheese...");
    }
    cook(): void {
        console.log("Baking pizza in the oven at 220°C...");
    }
    serve(): void {
        console.log("Serving pizza on a plate.");
    }
}
