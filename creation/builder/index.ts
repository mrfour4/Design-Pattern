import { DASHMealBuilder } from "./concrete-builder/dash";
import { MediterraneanMealBuilder } from "./concrete-builder/mediterranean";
import { VegetarianMealBuilder } from "./concrete-builder/vegetarian";
import { MealDirector } from "./director";

export class BuilderCreation {
    static main(): void {
        const director = new MealDirector();

        const mediterraneanBuilder = new MediterraneanMealBuilder();
        director.constructMediterraneanMeal(mediterraneanBuilder);
        const mediterraneanMeal = mediterraneanBuilder.getResult();
        console.log("Mediterranean Meal:");
        mediterraneanMeal.display();

        const dashBuilder = new DASHMealBuilder();
        director.constructDASHMeal(dashBuilder);
        const dashMeal = dashBuilder.getResult();
        console.log("\nDASH Meal:");
        dashMeal.display();

        const vegetarianBuilder = new VegetarianMealBuilder();
        director.constructVegetarianMeal(vegetarianBuilder);
        const vegetarianMeal = vegetarianBuilder.getResult();
        console.log("\nVegetarian Meal:");
        vegetarianMeal.display();
    }
}
