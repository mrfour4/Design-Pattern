# Thiết Kế Hệ Thống Sản Xuất Xe Ô Tô

## Mô Tả

Hệ thống này được thiết kế để mô phỏng quá trình sản xuất các dòng xe ô tô khác nhau, bao gồm **Xe Sedan, Xe SUV, và Xe Điện**. Các dòng xe này được sản xuất theo tiêu chuẩn của từng khu vực, cụ thể là **Châu Âu và Châu Á**. Để đảm bảo khả năng mở rộng và linh hoạt trong sản xuất, hệ thống được thiết kế dựa trên **Abstract Factory Pattern**, giúp quản lý và mở rộng các phiên bản xe dễ dàng mà không làm ảnh hưởng đến hệ thống hiện tại.

## Yêu Cầu

-   Sử dụng **Abstract Factory Pattern** để tạo ra các dòng xe khác nhau cho hai khu vực sản xuất **Châu Âu và Châu Á**.
-   Mỗi dòng xe bao gồm **Sedan, SUV, Electric**, và có các đặc điểm khác nhau:
    -   **Engine (Động cơ)**
    -   **Seat (Ghế ngồi)**
    -   **Size (Kích thước)**
-   Tạo các nhà máy sản xuất xe tương ứng với khu vực sản xuất:
    -   **EuropeanCarFactory** dành cho thị trường Châu Âu.
    -   **AsianCarFactory** dành cho thị trường Châu Á.
-   Hệ thống phải có khả năng **dễ dàng mở rộng** để hỗ trợ các khu vực sản xuất mới hoặc thêm các dòng xe mới trong tương lai.

## Class Diagram - Hệ Thống Sản Xuất Xe Ô Tô

![Class diagram](../../images/abstract_factory_cars.png)

Sơ đồ trên mô tả cấu trúc hệ thống sử dụng **Abstract Factory Pattern** để quản lý sản xuất các dòng xe theo từng khu vực.

-   **CarFactory**: Interface chứa phương thức tạo các dòng xe (Sedan, SUV, Electric).
-   **EuropeanCarFactory / AsianCarFactory**: Cung cấp các phiên bản xe theo tiêu chuẩn của từng khu vực.
-   **Sedan, SUV, Electric (Interfaces)**: Đại diện cho các dòng xe với phương thức chung để lấy thông tin về xe.
-   **EuropeanSedan, AsianSedan, EuropeanSUV, AsianSUV, EuropeanElectric, AsianElectric**: Các phiên bản xe cụ thể tương ứng với từng khu vực sản xuất.
-   **Application**: Chịu trách nhiệm gọi nhà máy sản xuất và hiển thị thông tin xe.
