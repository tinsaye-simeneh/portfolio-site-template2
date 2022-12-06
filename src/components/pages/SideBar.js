import React from "react";

import "../../index.css";
import Profile from "../../assets/Images/profile.png";
import HomeIcon from "../../assets/icons/home.svg";
import ContactIcon from "../../assets/icons/contact.svg";
import Resume from "../../assets/icons/resume.svg";
import Portoflio from "../../assets/icons/portfolio.svg";
import { Outlet, Link } from "react-router-dom";

const SIdeBar = () => {
  return (
    <>
      <div className="row mt-0">
        <div
          className="bg-black text-center pb-1 text-decoration-underline text-orange"
          style={{ fontSize: "2rem" }}
        >
          RJ
        </div>
        <div className="col-3 mx-auto bg-orange py-3 pt-5 text-center">
        <Link to="/Home">
          <img src={HomeIcon} alt="home" width={40} />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-3 mx-auto bg-orange py-4 text-center ">
        <Link to="/Resume">
          <img src={Resume} alt="resume" width={40}/>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-3 mx-auto bg-orange py-4 text-center">
        <Link to="/Portfolio">
          <img
            src={Portoflio}
            alt="Portfolio"
            width={40}
          />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-3 mx-auto bg-orange py-4 pb-5 text-center">
        <Link to="/Contact">
          <img
            src={ContactIcon}
            alt="Contact"
            width={40}
          />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SIdeBar;
