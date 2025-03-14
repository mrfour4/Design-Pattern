import type { Food } from "../food";
import { Pizza } from "../products/pizza";
import { FoodStore } from "../store";

export class PizzaStore extends FoodStore {
    createFood(): Food {
        return new Pizza();
    }
}
