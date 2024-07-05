// import Image from "../../assets/hinhTest.jpg";
import Image from "../assets/hinhTest.jpg";
import "./HomePage.scss";

const HomePage = (props) => {
  return (
    <div className="homepage-container">
      <div class="row mt-3" id="canChinh">
        <div class="col-md-6">
          <div class="">
            <label className="tenNghia">Trần Công Nhia</label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="d-flex justify-content-center" id="image">
            <img src={Image} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
