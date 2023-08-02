import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login">
        <div className="logo">
          <img src="/images/instagram_logo.png" alt="instagram" />
        </div>
        <form action="/login" method="post">
          <input
            type="text"
            name="username"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            required
          />
          <input type="submit" value="로그인" />
        </form>
        <a className="find-pw" href="#">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
