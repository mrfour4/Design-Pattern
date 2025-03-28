import type { Linh } from "../component/Linh";

export class LinhCoBan implements Linh {
    getItem(): string {
        return "Quân trang: balo, quần áo, nón";
    }
}
