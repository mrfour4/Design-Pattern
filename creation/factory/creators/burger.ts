import type { Food } from "../food";
import { Burger } from "../products/burger";
import { FoodStore } from "../store";

export class BurgerStore extends FoodStore {
    createFood(): Food {
        return new Burger();
    }
}
