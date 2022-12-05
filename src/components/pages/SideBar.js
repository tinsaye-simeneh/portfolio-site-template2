import React from "react";

import "../../index.css";
import Profile from "../../assets/Images/profile.png";
import HomeIcon from "../../assets/icons/home.png";
import ContactIcon from "../../assets/icons/contact.png";
import Resume from "../../assets/icons/resume.png";
import Portoflio from "../../assets/icons/portfolio.png";

const SIdeBar = () => {
  return (
    <>
    <div className="col-3 mt-3 pt-5">
      <div className="row mt-5">
        <div className="col-3 mx-auto bg-orange py-3 pt-4 text-center">
          <img src={HomeIcon} alt="home" />
        </div>
      </div>
      <div className="row">
        <div className="col-3 mx-auto bg-orange py-3 text-center">
          <img src={Resume} alt="resume" />
        </div>
      </div>
      <div className="row">
        <div className="col-3 mx-auto bg-orange py-3 text-center">
          <img src={Portoflio} alt="Portfolio" />
        </div>
      </div>
      <div className="row">
        <div className="col-3 mx-auto bg-orange py-3 pb-4 text-center">
          <img src={ContactIcon} alt="Contact" />
        </div>
      </div>
      </div>
    </>
  );
};

export default SIdeBar;
