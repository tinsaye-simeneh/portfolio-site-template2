import React from "react";
import "../../style/index.css";
import Profile from "../../assets/Images/profile.png";
import SideBar from "../SideBar";

const Home = () => {
  return (
    <>
      <div
        className="container-fluid bg-black py-5"
        style={{ height: "38.2rem" }}
      >
        <div className="row py-5 mx-auto bg-black w-100">
          <div className="col-md-3 col-3 pt-3">
            <SideBar Home="active"/>
          </div>
          <div className="col-md-3 col-12 img-col border-none rounded">
            <img src={Profile} alt="random" className="img-fluid" />
          </div>
          <div className="col-md-5 col-12 bg-black pt-5 mt-5">
            <h4 className="text-white mt-3">
              Hi, I'm  <span className="text-danger">Raul Josef</span>
            </h4>
            <h5 className="text-white mt-3">
              Frontend Web Developer | UI/UX Designer
            </h5>
            <h6 className="text-white mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
              justo id mauris laoreet porta. Orci varius natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. Nunc lectus
              felis, lacinia et iaculis sed, ornare in est. Aliquam euismod
              sceleris que orci non congue. Etiam ac malesuada nulla. Maecenas
              dapibus faucibus dignissim. Curabitur vestibulum mi egestas elit
              tempus consequat. Phasellus non nisi et sem semper porttitor.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Curabitur.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
