// import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// const SideBar = () => {
//   const [collapsed, setCollapsed] = React.useState(false);

//   return (
//     <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
//       <Sidebar collapsed={collapsed}>
//         <Menu>
//           <MenuItem> Documentation</MenuItem>
//           <MenuItem> Calendar</MenuItem>
//           <MenuItem> E-commerce</MenuItem>
//           <MenuItem> Examples</MenuItem>
//         </Menu>
//       </Sidebar>
//       <main style={{ padding: 10 }}>
//         <div>
//           <button
//             className="sb-button"
//             onClick={() => setCollapsed(!collapsed)}
//           >
//             Collapse
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };
// export default SideBar;
// import { Link, NavLink } from "react-router-dom";
// import React from "react";
// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

// const SideBar = () => {
//   const [collapsed, setCollapsed] = React.useState(false);

//   return (
//     <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
//       <Sidebar collapsed={collapsed}>
//         <Menu>
//           <MenuItem> </MenuItem>
//           <MenuItem> Calendar </MenuItem>

//           <MenuItem to="/manage-users"> E-commerce </MenuItem>
//           <MenuItem> Examples </MenuItem>
//         </Menu>
//       </Sidebar>
//       <main style={{ padding: 1 }}>
//         <div>
//           <button
//             className="sb-button"
//             onClick={() => setCollapsed(!collapsed)}
//           >
//             Collapse
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default SideBar;

import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div style={{ display: "flex", height: "100%", minHeight: "400px" }}>
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem>Documentation</MenuItem>
          <MenuItem>Calendar</MenuItem>
          <MenuItem>
            <Link to="/admins/manage-users" className="nav-link">
              Manager
            </Link>
          </MenuItem>
          <MenuItem>Examples</MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ padding: 10 }}>
        <div>
          <button
            className="sb-button"
            onClick={() => setCollapsed(!collapsed)}
          >
            Collapse
          </button>
        </div>
      </main>
    </div>
  );
};

export default SideBar;
