import type { Electric } from "../products";

export class EuropeanElectric implements Electric {
    getEngine(): string {
        return "Pin 100kWh - Châu Âu";
    }
    getSeat(): string {
        return "Da cao cấp - Châu Âu";
    }
    getSize(): string {
        return "4.8m - Châu Âu";
    }
}

export class AsianElectric implements Electric {
    getEngine(): string {
        return "Pin 80kWh - Châu Á";
    }
    getSeat(): string {
        return "Nỉ tiêu chuẩn - Châu Á";
    }
    getSize(): string {
        return "4.5m - Châu Á";
    }
}
