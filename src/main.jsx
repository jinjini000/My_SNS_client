import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import TokenStorage from "./db/token.js";
import AuthService from "./service/auth.js";
import PostService from "./service/post.js";
import HttpClient from "./network/http.js";
import { AuthErrorEventBus, AuthProVider } from "./context/AuthContext.jsx";
// import cors from "cors"

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;
console.log(baseURL);
// const tokenStorage = new TokenStorage();

// 객체 생성
const tokenStorage = new TokenStorage();

const httpClient = new HttpClient(baseURL);
const authService = new AuthService(httpClient, tokenStorage);
const postService = new PostService(httpClient, tokenStorage);
const authErrorEventBus = new AuthErrorEventBus();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProVider
        authService={authService}
        authErrorEventBus={authErrorEventBus}
      >
        <App postService={postService} />
      </AuthProVider>
    </BrowserRouter>
  </StrictMode>
);
