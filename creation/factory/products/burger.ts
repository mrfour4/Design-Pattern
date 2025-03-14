import { Food } from "../food";

export class Burger extends Food {
    prepare(): void {
        console.log("Grilling the beef patty and toasting the bun...");
    }
    cook(): void {
        console.log("Cooking the burger on a grill...");
    }
    serve(): void {
        console.log("Serving burger with fries.");
    }
}
