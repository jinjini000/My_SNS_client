import React, { useState } from "react";
import Banner from "../components/Banner";

const Login = ({ onSignUp, onLogin }) => {
  const [signUp, setSignup] = useState(false);
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [text, setText] = useState("");
  const [isAlert, setIsAlert] = useState(false);

  const onSubmit = (event) => {
    console.log("submit 함!");
    event.preventDefault();
    if (signUp) {
      onSignUp(userid, password, name, email, url).catch(setError);
    } else {
      onLogin(userid, password).catch(setError);
    }
  };

  const setError = (error) => {
    setText(error.toString());
    setIsAlert(true);
  };

  const onChange = (event) => {
    const {
      target: { name, value, checked },
    } = event;
    switch (name) {
      case "userid":
        return setUserid(value);
      case "password":
        return setPassword(value);
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "url":
        return setUrl(value);
      case "signup":
        return setSignup(checked);
    }
  };

  return (
    <>
      <Banner text={text} isAlert={isAlert} />
      <form className="auth-form" onSubmit={onSubmit}>
        <input
          type="text"
          name="userid"
          placeholder="아이디"
          value={userid}
          onChange={onChange}
          className="form-input"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChange}
          className="form-input"
          required
        />

        {signUp && (
          <input
            type="text"
            name="name"
            placeholder="이름"
            value={name}
            onChange={onChange}
            className="form-input"
            required
          />
        )}

        {signUp && (
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={email}
            onChange={onChange}
            className="form-input"
            required
          />
        )}

        {signUp && (
          <input
            type="url"
            name="url"
            placeholder="url"
            value={url}
            onChange={onChange}
            className="form-input"
            required
          />
        )}
        <div className="form-signup">
          <input
            type="checkbox"
            name="signup"
            id="signup"
            onChange={onChange}
            checked={signUp}
          />
          <label htmlFor="signup">회원가입</label>
        </div>
        <button className="form-btn auth-form-btn" type="submit">
          {signUp ? "회원가입" : "로그인"}
        </button>
      </form>
    </>
  );
};

export default Login;
