import type { Linh } from "../component/Linh";

export abstract class LinhDecorator implements Linh {
    protected linh: Linh;

    constructor(linh: Linh) {
        this.linh = linh;
    }

    abstract getItem(): string;
}
