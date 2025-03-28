import { LinhDecorator } from "../../abstract-decorator/LinhDecorator";

export class Ban extends LinhDecorator {
    getItem(): string {
        return `${this.linh.getItem()}, Kỹ năng: bắn`;
    }
}
