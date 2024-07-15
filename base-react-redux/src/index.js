import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/user/User";
import Admin from "./components/admin/Admin";
import HomePage from "./components/home/HomePage";
import Manager from "./components/admin/content/Manager";
import DashBoard from "./components/admin/content/DashBoard";
import Login from "./components/Auth/Login";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Auth/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>

          <Route path="users" element={<User />}></Route>
        </Route>
        <Route path="/admins" element={<Admin />}>
          <Route index element={<DashBoard />}></Route>
          <Route path="manage-users" element={<Manager />}></Route>
        </Route>

        <Route path="/logins" element={<Login />}></Route>
        <Route path="/registers" element={<Register />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
