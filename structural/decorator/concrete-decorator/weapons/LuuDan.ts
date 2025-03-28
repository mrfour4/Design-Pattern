import { LinhDecorator } from "../../abstract-decorator/LinhDecorator";

export class LuuDan extends LinhDecorator {
    getItem(): string {
        return `${this.linh.getItem()}, Vũ khí: lựu đạn`;
    }
}
