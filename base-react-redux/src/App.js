import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Header></Header>
      <div>hello</div>
      <div></div>
      <div>
        <button>
          <Link to="/admins">Go to admin page</Link>
        </button>

        <button>
          <Link to="/users">Go to user page</Link>
        </button>
      </div>
    </div>
  );
};
export default App;
