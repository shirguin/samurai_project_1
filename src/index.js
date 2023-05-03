import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const state = {
  posts: [
    { id: 1, message: "Hi, how are you?", count: 9 },
    { id: 2, message: "It's my first post", count: 14 },
  ],
  dialogs: [
    { id: 1, name: "Алексей" },
    { id: 2, name: "Иван" },
    { id: 3, name: "Светлана" },
    { id: 4, name: "Марина" },
    { id: 5, name: "Петр" },
    { id: 6, name: "Сергей" },
    { id: 7, name: "Андрей" },
  ],
  messages : [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Все ок" },
    { id: 4, message: "Прикольно" },
    { id: 5, message: "Как сам?" },
    { id: 6, message: "Что на завтра?" },
  ],
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App dialogs = {state.dialogs} messages = {state.messages} posts = {state.posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
