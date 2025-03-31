import { ClothingItem } from "./client";

export class ProxyStructure {
    static main(): void {
        const products: ClothingItem[] = [
            new ClothingItem("T-Shirt", 20, "tshirt.jpg"),
            new ClothingItem("Jeans", 50, "jeans.jpg"),
            new ClothingItem("Jacket", 100, "jacket.jpg")
        ];


        console.log("Product list:");
        products.forEach((product) => product.showPreview());

        console.log("\nUser wants to see details:");
        products[1].showDetails();
        products[2].showDetails();
    }
}