import React from "react";
import SIdeBar from "../SideBar";
import "../../style/index.css";
import Cards from "../PortfolioCards";

const Portfolio = () => {
  return (
    <div className="container-fluid bg-black Page-Container Portfolio-Page-Container">
      <div className="row py-2">
        <div className="col-md-3 col-11 mx-auto mt-5">
          <SIdeBar Portfolio='active'/>
        </div>

        <div className="col-md-8 text-white" style={{ fontSize: "1.5rem" }}>
          <div className="row">
            <span className="text-center my-4 text-decoration-underline">Portfolio</span>
          </div>
          <div className="row text-center mx-auto">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
