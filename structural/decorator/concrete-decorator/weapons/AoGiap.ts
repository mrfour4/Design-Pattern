import { LinhDecorator } from "../../abstract-decorator/LinhDecorator";

export class AoGiap extends LinhDecorator {
    getItem(): string {
        return `${this.linh.getItem()}, Vũ khí: áo giáp`;
    }
}
