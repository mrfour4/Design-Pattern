# Hệ Thống Quản Lý Đặt Món Ăn

## Mô Tả

Hệ thống này được thiết kế để quản lý quy trình đặt món ăn cho một nhà hàng, trong đó nhà hàng cung cấp nhiều loại món ăn khác nhau như **Pizza, Burger, và Pasta**. Để đảm bảo khả năng mở rộng và duy trì dễ dàng, hệ thống sử dụng **Factory Method Pattern**, giúp tạo ra các loại món ăn khác nhau mà không làm thay đổi mã nguồn hiện tại.

## Yêu Cầu

-   Sử dụng **Factory Method Pattern** để tạo ra các đối tượng món ăn khác nhau.
-   Mỗi món ăn cần có các phương thức chính:
    -   **prepare()**: Chuẩn bị nguyên liệu.
    -   **cook()**: Nấu món ăn.
    -   **serve()**: Phục vụ món ăn.
-   Hệ thống cần đảm bảo khả năng mở rộng dễ dàng, cho phép thêm các món ăn mới mà không cần sửa đổi nhiều mã nguồn hiện có.

## Class Diagram - Hệ Thống Quản Lý Đặt Món Ăn

![Class diagram](../../images/factory_method_food.png)

Sơ đồ trên mô tả hệ thống quản lý đặt món ăn sử dụng **Factory Method Pattern**:

-   **Food (Abstract Product)**: Lớp trừu tượng đại diện cho một món ăn với các phương thức chuẩn bị, nấu, và phục vụ.
-   **Pizza, Burger, Pasta (Concrete Products)**: Các lớp cụ thể kế thừa từ `Food`, triển khai các phương thức đặc trưng cho từng món ăn.
-   **FoodStore (Abstract Creator)**: Lớp trừu tượng chứa phương thức `createFood()` để tạo ra một món ăn cụ thể.
-   **PizzaStore, BurgerStore, PastaStore (Concrete Creators)**: Các lớp kế thừa từ `FoodStore`, cài đặt phương thức `createFood()` để trả về một món ăn tương ứng.
-   **Client**: Gọi `orderFood()` từ một cửa hàng cụ thể để đặt món ăn.
