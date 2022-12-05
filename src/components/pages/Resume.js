import React from "react";
import SIdeBar from "./SideBar";
import "../../index.css";
import Cards from './Cards'

const Resume = () => {
  return (
    <div className="container-fluid py-5 bg-black">
      <div className="row py-2">
        
    <div className="col-3 mt-5 pt-5">
        <SIdeBar/>
        </div>

        <div className="col-md-8 text-white" style={{ fontSize: "1.5rem" }}>
          <div className="row">
            <span className="text-center mb-3">Portfolio</span>
          </div>
          <div className="row text-center mx-auto">
            <Cards/>
            <Cards/>
            <Cards/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
