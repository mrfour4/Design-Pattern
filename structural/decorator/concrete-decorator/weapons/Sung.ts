import { LinhDecorator } from "../../abstract-decorator/LinhDecorator";

export class Sung extends LinhDecorator {
    getItem(): string {
        return `${this.linh.getItem()}, Vũ khí: súng`;
    }
}
