import { BurgerStore } from "./creators/burger";
import { PastaStore } from "./creators/pasta";
import { PizzaStore } from "./creators/pizza";

export class FactoryCreation {
    static main(): void {
        console.log("Ordering Pizza:");
        const pizzaStore = new PizzaStore();
        pizzaStore.orderFood();

        console.log("\nOrdering Burger:");
        const burgerStore = new BurgerStore();
        burgerStore.orderFood();

        console.log("\nOrdering Pasta:");
        const pastaStore = new PastaStore();
        pastaStore.orderFood();
    }
}
