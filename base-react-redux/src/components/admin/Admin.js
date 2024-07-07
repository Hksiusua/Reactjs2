// import SideBar from "./SideBar";
// import "./Admin.scss";
// import { Link, Outlet } from "react-router-dom";

// const Admin = (props) => {
//   return (
//     <div className="admin-container">
//       <div>
//         <SideBar />
//       </div>
//       <div className="admin-content">
//         <Outlet></Outlet>
//       </div>
//     </div>
//   );
// };
// export default Admin;

import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import "./Admin.scss";

const Admin = () => {
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar />
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
