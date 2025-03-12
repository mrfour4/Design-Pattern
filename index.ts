import { DASHMealBuilder } from "./builder/concrete-builder/dash";
import { MediterraneanMealBuilder } from "./builder/concrete-builder/mediterranean";
import { VegetarianMealBuilder } from "./builder/concrete-builder/vegetarian";
import { MealDirector } from "./builder/director";

// Khởi tạo Director
const director = new MealDirector();

// Xây dựng bữa ăn Địa Trung Hải
const mediterraneanBuilder = new MediterraneanMealBuilder();
director.constructMediterraneanMeal(mediterraneanBuilder);
const mediterraneanMeal = mediterraneanBuilder.getResult();
console.log("Mediterranean Meal:");
mediterraneanMeal.display();

// Xây dựng bữa ăn DASH
const dashBuilder = new DASHMealBuilder();
director.constructDASHMeal(dashBuilder);
const dashMeal = dashBuilder.getResult();
console.log("\nDASH Meal:");
dashMeal.display();

// Xây dựng bữa ăn Chay
const vegetarianBuilder = new VegetarianMealBuilder();
director.constructVegetarianMeal(vegetarianBuilder);
const vegetarianMeal = vegetarianBuilder.getResult();
console.log("\nVegetarian Meal:");
vegetarianMeal.display();
