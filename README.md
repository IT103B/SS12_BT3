# Bài 3: Trade-off giữa Menu Monolithic và kiến trúc Modular

## Bảng so sánh

| Tiêu chuẩn | Monolithic Switch-Case | Modular Function Architecture |
|---|---|---|
| Độ dài khối `switch` | Mỗi `case` chứa toàn bộ phần nhập liệu, xử lý và xuất kết quả; khối lệnh nhanh chóng dài và khó đọc. | `switch` chỉ điều hướng, thường mỗi `case` gọi một hàm nghiệp vụ. |
| Khả năng bảo trì | Logic của nhiều chức năng trộn lẫn; thay đổi một nghiệp vụ dễ ảnh hưởng nhánh khác. | Mỗi hàm có trách nhiệm rõ ràng, nên sửa đổi được giới hạn trong chức năng liên quan. |
| Tái sử dụng | Logic gắn với giao diện CLI, khó gọi lại từ nơi khác. | Có thể gọi hàm nghiệp vụ từ CLI, API hoặc giao diện khác nếu tách phần nhập/xuất khỏi nghiệp vụ. |
| Kiểm thử độc lập | Khó kiểm thử riêng từng chức năng vì phải đi qua menu và các nhánh liên quan. | Có thể kiểm thử từng hàm với dữ liệu đầu vào độc lập. |
| Mở rộng từ 5 lên 20 chức năng | `switch` phình to, tăng nguy cơ trùng lặp và bỏ sót khi sửa. | Có thể bổ sung hàm mới và một nhánh điều hướng nhỏ; cấu trúc mỗi chức năng vẫn tách biệt. |
| Chi phí/đánh đổi | Ban đầu viết nhanh cho chương trình rất nhỏ, nhưng chi phí đọc, sửa và kiểm thử tăng theo quy mô. | Cần thiết kế và đặt tên hàm từ đầu, đổi lại giảm độ phức tạp khi bảo trì và mở rộng. |

## Vì sao nên tách hàm?

Theo nguyên lý Đơn nhiệm (Single Responsibility Principle), mỗi hàm nên tập trung vào một trách nhiệm. Ví dụ, `addSubscription()` xử lý thêm thuê bao, còn `listSubscriptions()` chỉ hiển thị danh sách. Khi nghiệp vụ nằm trong các hàm độc lập, menu chỉ chịu trách nhiệm nhận lựa chọn và gọi đúng chức năng. Cấu trúc này làm luồng chương trình dễ đọc, các chức năng dễ kiểm thử, và giảm nguy cơ sửa một nhánh làm hỏng nhánh khác.

Việc tách hàm không tự động làm logic tái sử dụng được ở mọi môi trường: để dùng cùng nghiệp vụ qua CLI/API/Web, nên tiếp tục tách phần nhập/xuất giao diện khỏi phần xử lý dữ liệu.

## Ví dụ

Tệp [`solution_ex10.js`](./solution_ex10.js) minh họa menu nguyên khối và cách menu mô-đun gọi các hàm riêng.
