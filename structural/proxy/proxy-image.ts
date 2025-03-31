import { ClothingImage } from "./clothing-image";
import type { Image } from "./image";

export class ProxyClothingImage implements Image {
    private realImage: ClothingImage | null = null;
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    public display(): void {

        if (this.realImage === null) {
            this.realImage = new ClothingImage(this.fileName);
        }
        this.realImage.display();
    }
}