import { DonHangFacade } from "./DonHangFacade";

export class FacadeStructure {
    static main(): void {
        const datHang = new DonHangFacade();
        datHang.datHang(
            "SP001",
            "user123",
            500000,
            "123 Đường ABC, Quận 1, TP.HCM"
        );
    }
}
