export class Meal {
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
