import type { Meal } from "./meal";

export interface MealBuilder {
    reset(): void;
    setProtein(protein: string): void;
    setCarbohydrate(carbohydrate: string): void;
    setVegetables(vegetables: string): void;
    setDrink(drink: string): void;
    getResult(): Meal;
}
