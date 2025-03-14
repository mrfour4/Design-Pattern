import { Food } from "../food";

export class Pasta extends Food {
    prepare(): void {
        console.log("Boiling pasta and preparing the sauce...");
    }
    cook(): void {
        console.log("Mixing pasta with sauce on a pan...");
    }
    serve(): void {
        console.log("Serving pasta in a bowl.");
    }
}
