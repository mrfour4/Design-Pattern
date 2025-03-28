import { KiemTraTonKho } from "./subsystem/KiemTraTonKho";
import { VanChuyen } from "./subsystem/VanChuyen";
import { XuLyThanhToan } from "./subsystem/XuLyThanhToan";

export class DonHangFacade {
    private tonKho: KiemTraTonKho;
    private thanhToan: XuLyThanhToan;
    private vanChuyen: VanChuyen;

    constructor() {
        this.tonKho = new KiemTraTonKho();
        this.thanhToan = new XuLyThanhToan();
        this.vanChuyen = new VanChuyen();
    }

    datHang(
        maSanPham: string,
        taiKhoan: string,
        soTien: number,
        diaChi: string
    ): void {
        console.log("Bắt đầu xử lý đơn hàng...");

        const coHang = this.tonKho.kiemTraSanPham(maSanPham);
        if (!coHang) {
            console.log("Sản phẩm không còn trong kho.");
            return;
        }

        const thanhToanThanhCong = this.thanhToan.thanhToan(taiKhoan, soTien);
        if (!thanhToanThanhCong) {
            console.log("Thanh toán thất bại.");
            return;
        }

        this.vanChuyen.vanChuyenDiaChi(diaChi);
        console.log("Đơn hàng đã được xử lý thành công.");
    }
}
