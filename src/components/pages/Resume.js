import React from "react";
import SIdeBar from "./SideBar";
import "../../index.css";

const Resume = () => {
  return (
    <div className="container-fluid py-5 bg-black">
      <div className="row py-5">
        <SIdeBar />

        <div className="col-md-8 text-white" style={{ fontSize: "1.5rem" }}>
          <div className="row">
            <span className="text-left">Portfolio</span>
          </div>
          <div className="row mt-3 text-center">
            <div className="col-md-6">
              <div className="col-md-8 border rounded mt-5">yes</div>
              <div className="col-md-8 border rounded mt-5">yes</div>
            </div>
            <div className="col-md-6">
              <div className="col-md-8 border rounded mt-5">yes</div>
              <div className="col-md-8 border rounded mt-5">yes</div>
            </div>
          <div className="col-md-6">
            <div className="col-md-8 border rounded mt-5">yes</div>
            <div className="col-md-8 border rounded mt-5">yes</div>
          </div>
          <div className="col-md-6">
            <div className="col-md-8 border rounded mt-5">yes</div>
            <div className="col-md-8 border rounded mt-5">yes</div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
