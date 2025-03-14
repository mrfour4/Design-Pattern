import type { Sedan } from "../products";

export class EuropeanSedan implements Sedan {
    getEngine(): string {
        return "2.0L Turbo - Châu Âu";
    }
    getSeat(): string {
        return "Da cao cấp - Châu Âu";
    }
    getSize(): string {
        return "4.5m - Châu Âu";
    }
}

export class AsianSedan implements Sedan {
    getEngine(): string {
        return "1.8L Hybrid - Châu Á";
    }
    getSeat(): string {
        return "Nỉ tiêu chuẩn - Châu Á";
    }
    getSize(): string {
        return "4.2m - Châu Á";
    }
}
