import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <div className="header-container"></div>
      <div className="main-container"></div>
      <div className="sidenav-container"></div>
      <div className="app-content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default App;
