import type { Image } from "./image";
import { ProxyClothingImage } from "./proxy-image";

export class ClothingItem {
    private name: string;
    private price: number;
    private image: Image;

    constructor(name: string, price: number, imageFileName: string) {
        this.name = name;
        this.price = price;
        this.image = new ProxyClothingImage(imageFileName);
    }

    public showDetails(): void {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
        this.image.display();
    }

    public showPreview(): void {
        console.log(`Product: ${this.name}, Price: $${this.price}`);
    }
}
