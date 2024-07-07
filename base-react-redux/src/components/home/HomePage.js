// import Image from "../../assets/hinhTest.jpg";
import Image from "../assets/hinhTest.jpg";
import "./HomePage.scss";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <div className="row mt-3" id="canChinh">
        <div className="col-md-6">
          <div>
            <label className="tenNghia">Trần Công Nhia</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-center" id="image">
            {/* <img src={Image} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
