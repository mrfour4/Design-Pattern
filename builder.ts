class Meal {
    protein: string;
    carbohydrate: string;
    vegetables: string;
    drink: string;

    constructor() {
        this.protein = "";
        this.carbohydrate = "";
        this.vegetables = "";
        this.drink = "";
    }

    display(): void {
        console.log(`Meal includes: 
        - Protein: ${this.protein}
        - Carbohydrate: ${this.carbohydrate}
        - Vegetables: ${this.vegetables}
        - Drink: ${this.drink}`);
    }
}

interface MealBuilder {
    reset(): void;
    setProtein(protein: string): void;
    setCarbohydrate(carbohydrate: string): void;
    setVegetables(vegetables: string): void;
    setDrink(drink: string): void;
    getResult(): Meal;
}

class MediterraneanMealBuilder implements MealBuilder {
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

class DASHMealBuilder implements MealBuilder {
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

class VegetarianMealBuilder implements MealBuilder {
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

class MealDirector {
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
