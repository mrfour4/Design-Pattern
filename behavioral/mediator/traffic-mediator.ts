import type { TrafficLight } from "./traffic-light";

export class TrafficMediator {
    private lights: TrafficLight[] = [];

    registerLight(light: TrafficLight): void {
        this.lights.push(light);
    }

    changeLight(target: TrafficLight): void {
        for (const light of this.lights) {
            if (light === target) {
                light.turnGreen();
            } else {
                if (light.getColor() === "green") {
                    light.turnYellow();
                    setTimeout(() => {
                        light.turnRed();
                    }, 1000);
                } else {
                    light.turnRed();
                }
            }
        }
    }
}
