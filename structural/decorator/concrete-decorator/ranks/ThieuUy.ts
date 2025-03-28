import { LinhDecorator } from "../../abstract-decorator/LinhDecorator";

export class ThieuUy extends LinhDecorator {
    getItem(): string {
        return `${this.linh.getItem()}, Quân hàm: Thiếu úy`;
    }
}
