import React from "react";

import "../../index.css";
import Profile from "../../assets/Images/profile.png";
import HomeIcon from "../../assets/icons/home.svg";
import ContactIcon from "../../assets/icons/contact.svg";
import Resume from "../../assets/icons/resume.svg";
import Portoflio from "../../assets/icons/portfolio.svg";

const SIdeBar = () => {
  return (
    <>
    <div className="col-3 mt-3 pt-5">
      <div className="row mt-0">
        <div className="col-3 mx-auto bg-orange py-3 pt-5 text-center">
          <img src={HomeIcon} alt="home" width={40}/>
        </div>
      </div>
      <div className="row">
        <div className="col-3 mx-auto bg-orange py-4 text-center">
          <img src={Resume} alt="resume" width={40}/>
        </div>
      </div>
      <div className="row">
        <div className="col-3 mx-auto bg-orange py-4 text-center">
          <img src={Portoflio} alt="Portfolio" width={40}/>
        </div>
      </div>
      <div className="row">
        <div className="col-3 mx-auto bg-orange py-4 pb-5 text-center">
          <img src={ContactIcon} alt="Contact" width={40}/>
        </div>
      </div>
      </div>
    </>
  );
};

export default SIdeBar;
