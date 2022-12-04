import React from "react";
import "../../index.css";
import Profile from "../../assets/Images/profile.png";
import HomeIcon from '../../assets/Images/home.png';
import ContactIcon from '../../assets/Images/contact.png';
import Resume from '../../assets/Images/resume.png';
import Portoflio from '../../assets/Images/portfolio.png';

let Main = () => {
  return (
    <>
    <div
      className="container-fluid bg-black py-5"
      style={{ height: "38.2rem" }}
    >
      <div className="row py-5 mx-auto bg-black w-100">
        <div className="col-3 mt-3 pt-5">
          <div className="row mt-5">
            <div className="col-3 mx-auto bg-orange py-3 pt-4 text-center">
              <img src={HomeIcon} alt="home" />
            </div>
          </div>
          <div className="row">
            <div className="col-3 mx-auto bg-orange py-3  text-center">
                <img src={Resume} alt="reusme" />
            </div>
          </div>
          <div className="row">
            <div className="col-3 mx-auto bg-orange py-3  text-center">
              <img src={Portoflio} alt="Portfolio" />
            </div>
          </div>
          <div className="row">
            <div className="col-3 mx-auto bg-orange py-3 pb-4  text-center">
              <img src={ContactIcon} alt="Contact" />
            </div>
          </div>
        </div>
        <div className="col-3 ms-3 border-none rounded">
          <img src={Profile} alt="random" className="img-fluid" />
        </div>
        <div className="col-5 bg-black pt-5 ms-5 mt-5">
          <h4 className="text-white mt-3">
            Hi, I'm <span className="text-danger">Raul Josef</span>
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

    <div className="bg-warning justify-content-end pb-1 text-decoration-underline text-orange" style={{fontSize: '2rem'}}>
        RJ
        </div>
        
        </>
  );
};

export default Main;
