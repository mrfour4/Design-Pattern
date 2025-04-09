import type { TrafficMediator } from "./traffic-mediator";
import type { TrafficColor } from "./types";

export class TrafficLight {
    private color: TrafficColor = "red";

    constructor(public direction: string, private mediator: TrafficMediator) {}

    getColor(): TrafficColor {
        return this.color;
    }

    setColor(color: TrafficColor): void {
        this.color = color;
        console.log(`[${this.direction}] light turns ${color.toUpperCase()}`);
    }

    requestGreen(): void {
        this.mediator.changeLight(this);
    }

    turnRed(): void {
        this.setColor("red");
    }

    turnGreen(): void {
        this.setColor("green");
    }

    turnYellow(): void {
        this.setColor("yellow");
    }
}
