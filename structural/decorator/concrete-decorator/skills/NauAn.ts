import { LinhDecorator } from "../../abstract-decorator/LinhDecorator";

export class NauAn extends LinhDecorator {
    getItem(): string {
        return `${this.linh.getItem()}, Kỹ năng: nấu ăn`;
    }
}
