import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

const Admin = (props) => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar />
      </div>
      <div className="admin-content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Admin;
