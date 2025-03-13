import type { MealBuilder } from "./builder";

export class MealDirector {
    constructMediterraneanMeal(builder: MealBuilder): void {
        builder.reset();
        builder.setProtein("Fish");
        builder.setCarbohydrate("Olive Oil");
        builder.setVegetables("Fresh Vegetables");
        builder.setDrink("Red Wine");
    }

    constructDASHMeal(builder: MealBuilder): void {
        builder.reset();
        builder.setProtein("Chicken");
        builder.setCarbohydrate("Brown Rice");
        builder.setVegetables("Green Vegetables");
        builder.setDrink("Fruit Juice");
    }

    constructVegetarianMeal(builder: MealBuilder): void {
        builder.reset();
        builder.setProtein("Tofu");
        builder.setCarbohydrate("Potato");
        builder.setVegetables("Mixed Vegetables");
        builder.setDrink("Water");
    }
}
