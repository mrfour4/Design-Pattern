import { LinhDecorator } from "../../abstract-decorator/LinhDecorator";

export class ChuaTri extends LinhDecorator {
    getItem(): string {
        return `${this.linh.getItem()}, Kỹ năng: chữa trị`;
    }
}
