import { LinhDecorator } from "../../abstract-decorator/LinhDecorator";

export class QuanNhan extends LinhDecorator {
    getItem(): string {
        return `${this.linh.getItem()}, Quân hàm: Quân nhân`;
    }
}
