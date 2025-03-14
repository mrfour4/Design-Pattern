import type { Food } from "./food";

export abstract class FoodStore {
    abstract createFood(): Food;

    orderFood(): void {
        const food = this.createFood();
        food.prepare();
        food.cook();
        food.serve();
    }
}
