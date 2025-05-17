# Hướng dẫn tạo React project và đẩy lên GitHub

## 1. Tạo project React

- **Cách 1: Create React App**

```bash
npx create-react-app my-app
cd my-app
npm start
----------------------------------
Cách 2: Vite

npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev

2. Tạo repository trên GitHub
Đăng nhập https://github.com

Nhấn New repository

Đặt tên repo (ví dụ my-app)

Chọn Public/Private, nhấn Create repository

--------------------------------------
3. Đẩy code lên GitHub
git init                    # Khởi tạo git nếu chưa có
git add .                   # Thêm file
git commit -m "Init project"  # Commit
git remote add origin https://github.com/username/my-app.git  # Thêm remote
git branch -M main          # Đổi sang nhánh main (nếu muốn)
git push -u origin main     # Push code lên GitHub
--------------------------------------
4. Xử lý lỗi thường gặp
Lỗi src refspec main does not match any:

Kiểm tra nhánh hiện tại:

git branch
Nếu nhánh là master, dùng:

git push -u origin master
Nếu remote đã có commit, cần pull trước rồi push:

git pull origin main --rebase
git push origin main
5. Xóa file trên GitHub
Trên GitHub: vào file → Delete this file → commit thay đổi

Hoặc trên local:

git rm path/to/file
git commit -m "Delete file"
git push origin main
```
