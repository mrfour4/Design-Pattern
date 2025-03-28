import { LinhDecorator } from "../../abstract-decorator/LinhDecorator";

export class TrungUy extends LinhDecorator {
    getItem(): string {
        return `${this.linh.getItem()}, Quân hàm: Trung úy`;
    }
}
