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

