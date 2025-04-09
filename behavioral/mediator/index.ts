import { TrafficLight } from "./traffic-light";
import { TrafficMediator } from "./traffic-mediator";

export class MediatorBehavioral {
    static main(): void {
        const mediator = new TrafficMediator();

        const east = new TrafficLight("East", mediator);
        const west = new TrafficLight("West", mediator);
        const north = new TrafficLight("North", mediator);
        const south = new TrafficLight("South", mediator);

        mediator.registerLight(east);
        mediator.registerLight(west);
        mediator.registerLight(north);
        mediator.registerLight(south);

        // Simulate traffic light changes over time
        east.requestGreen(); // East turns green, others turn red
        setTimeout(() => west.requestGreen(), 3000); // After 3s, West turns green
        setTimeout(() => south.requestGreen(), 6000); // After 6s, South turns green
        setTimeout(() => north.requestGreen(), 9000); // After 9s, North turns green
    }
}
