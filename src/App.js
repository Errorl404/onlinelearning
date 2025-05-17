import React, { useState } from 'react';
import './App.css';  // Đảm bảo file CSS đang được áp dụng

function App() {
  // Các state để lưu trữ giá trị từ form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Hàm xử lý khi người dùng nhấn nút Đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();  // Ngừng việc reload trang khi submit form

    // Kiểm tra thông tin đăng nhập
    if (username && password) {
      setMessage(`Đăng nhập thành công! Tên người dùng: ${username}`);
    } else {
      setMessage('Vui lòng điền đầy đủ thông tin.');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Trang Đăng Nhập</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Tên người dùng:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nhập tên người dùng"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Mật khẩu:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          <button type="submit">Đăng nhập</button>
        </form>

        {/* Hiển thị thông báo sau khi người dùng đăng nhập */}
        {message && <p>{message}</p>}
      </header>
    </div>
  );
}

export default App;
