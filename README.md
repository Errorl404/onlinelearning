# Các bước tạo Git .

Bước 1: Tạo repository mới trên GitHub

Truy cập https://github.com và đăng nhập.
1.	Nhấn nút + ở góc phải trên cùng → chọn New repository.
2.	Nhập:
o	Repository name: (ví dụ: hello-software-Devv)
o	Description: (tuỳ chọn)
o	Public hoặc Private
o	KHÔNG tick chọn “Add a README file” (để làm theo yêu cầu bài)
3.	Nhấn Create repository.
________________________________________

Bước 2: Clone repository về máy
Mở Terminal (Linux/macOS) hoặc Git Bash (Windows) và chạy:
bash
git clone https://github.com/tai-khoan-cua-ban/ten-repo.git
cd ten-repo
Thay tai-khoan-cua-ban và ten-repo bằng tài khoản và tên repo bạn vừa tạo.
______________________________________
Bước 3: Thêm file README.md
Tạo file README.md và thêm nội dung:
bash
echo "Hello Software Development" > README.md
________________________________________
Bước 4: Commit và push lên GitHub
bash
git add README.md
git commit -m "Add README with hello message"
git push origin main
