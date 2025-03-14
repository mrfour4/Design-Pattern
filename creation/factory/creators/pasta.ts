import type { Food } from "../food";
import { Pasta } from "../products/pasta";
import { FoodStore } from "../store";

export class PastaStore extends FoodStore {
    createFood(): Food {
        return new Pasta();
    }
}
