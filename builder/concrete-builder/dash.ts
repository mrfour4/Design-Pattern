import type { MealBuilder } from "../builder";
import { Meal } from "../meal";

export class DASHMealBuilder implements MealBuilder {
    private meal: Meal;

    constructor() {
        this.meal = new Meal();
    }

    reset(): void {
        this.meal = new Meal();
    }

    setProtein(protein: string): void {
        this.meal.protein = protein;
    }

    setCarbohydrate(carbohydrate: string): void {
        this.meal.carbohydrate = carbohydrate;
    }

    setVegetables(vegetables: string): void {
        this.meal.vegetables = vegetables;
    }

    setDrink(drink: string): void {
        this.meal.drink = drink;
    }

    getResult(): Meal {
        return this.meal;
    }
}
