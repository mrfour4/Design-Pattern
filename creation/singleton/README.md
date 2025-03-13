# Đề Bài: Thiết Kế Hệ Thống Quản Lý Hồ Sơ Bệnh Nhân

## Mô Tả

Bạn được yêu cầu thiết kế một hệ thống quản lý hồ sơ bệnh nhân sử dụng **Singleton Pattern**. Hệ thống phải đảm bảo rằng có một nơi lưu trữ và quản lý tất cả hồ sơ bệnh nhân duy nhất trên toàn hệ thống. Điều này giúp duy trì **tính nhất quán** và **tránh trùng lặp hoặc mất dữ liệu** khi các bác sĩ hoặc nhân viên y tế truy cập vào hồ sơ của bệnh nhân.

## Yêu Cầu

-   Sử dụng **Singleton Pattern** để thiết kế lớp quản lý hồ sơ bệnh nhân, đảm bảo **chỉ có một thể hiện duy nhất** của hệ thống quản lý này.
-   Cung cấp các phương thức để:
    -   **Thêm mới** hồ sơ bệnh nhân.
    -   **Cập nhật** thông tin bệnh nhân.
    -   **Truy vấn** hồ sơ bệnh nhân.
-   Hệ thống cần hỗ trợ **truy cập thông tin bệnh nhân từ nhiều nơi khác nhau** (ví dụ: từ bác sĩ, y tá, nhân viên hành chính) nhưng vẫn đảm bảo **tính nhất quán của dữ liệu**.
