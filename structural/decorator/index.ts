import type { Linh } from "./component/Linh";
import { LinhCoBan } from "./concrete-component/LinhCoBan";
import { TrungUy } from "./concrete-decorator/ranks/TrungUy";
import { ChuaTri } from "./concrete-decorator/skills/ChuaTri";
import { Sung } from "./concrete-decorator/weapons/Sung";

export class DecoratorStructural {
    static main(): void {
        let linh: Linh = new LinhCoBan();
        linh = new Sung(linh);
        linh = new ChuaTri(linh);
        linh = new TrungUy(linh);

        console.log(linh.getItem());
    }
}
