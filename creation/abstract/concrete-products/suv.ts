import type { SUV } from "../products";

export class EuropeanSUV implements SUV {
    getEngine(): string {
        return "3.0L V6 - Châu Âu";
    }
    getSeat(): string {
        return "Da cao cấp - Châu Âu";
    }
    getSize(): string {
        return "5.0m - Châu Âu";
    }
}

export class AsianSUV implements SUV {
    getEngine(): string {
        return "2.5L Hybrid - Châu Á";
    }
    getSeat(): string {
        return "Nỉ tiêu chuẩn - Châu Á";
    }
    getSize(): string {
        return "4.7m - Châu Á";
    }
}
