# Hướng dẫn Git cơ bản 

 1. Khởi tạo repo Git trong thư mục hiện tại
git init

 2. Kiểm tra trạng thái file
git status

 3. Thêm file vào staging area
git add <file>          # Thêm file cụ thể
git add .               # Thêm tất cả file thay đổi

 4. Tạo commit với message
git commit -m "Mô tả thay đổi"

 5. Xem lịch sử commit
git log

 6. Tạo nhánh mới và chuyển sang nhánh đó
git checkout -b ten-nhanh-moi

 7. Chuyển nhánh hiện tại
git checkout ten-nhanh

 8. Kết nối remote repo trên GitHub
git remote add origin https://github.com/username/repo.git

 9. Đẩy code lên nhánh main
git push -u origin main

 10. Kéo code mới từ nhánh main
git pull origin main

 11. Xóa file khỏi repo
git rm file.txt
git commit -m "Xóa file"
git push origin main

 12. Đổi tên nhánh hiện tại thành main (nếu cần)
git branch -M main

# Hướng dẫn tạo Git cho project mới
Bước 1: Cài đặt Git
Tải Git tại: https://git-scm.com/downloads

Cài đặt theo hướng dẫn cho hệ điều hành của bạn.

Bước 2: Khởi tạo repository Git trong thư mục project
Mở terminal (CMD/PowerShell/macOS Terminal) rồi:

bash
Sao chép
Chỉnh sửa
cd đường_dẫn_đến_folder_project
git init
Lệnh git init sẽ tạo thư mục ẩn .git, giúp Git theo dõi các thay đổi trong project.

Bước 3: Thêm file vào vùng staging
bash
Sao chép
Chỉnh sửa
git add .
Lệnh này thêm tất cả file (file mới hoặc đã chỉnh sửa) vào vùng chờ commit.

Bước 4: Tạo commit đầu tiên
bash
Sao chép
Chỉnh sửa
git commit -m "Initial commit"
Đây là bước lưu lại trạng thái file với lời nhắn mô tả.

Bước 5: Tạo repository trên GitHub
Vào https://github.com/

Đăng nhập, nhấn nút New repository

Đặt tên repo, chọn public hoặc private

Nhấn Create repository

Bước 6: Kết nối Git local với GitHub
bash
Sao chép
Chỉnh sửa
git remote add origin https://github.com/username/repo-name.git
Thay username và repo-name bằng thông tin của bạn.

Bước 7: Đẩy code lên GitHub
bash
Sao chép
Chỉnh sửa
git branch -M main          # Đổi tên nhánh chính thành main (nếu cần)
git push -u origin main
