import React from "react";
import SIdeBar from "./SideBar";
import "../../index.css";
import p1 from '../../assets/Images/p1.jpg'

const Resume = () => {
  return (
    <div className="container-fluid py-5 bg-black">
      <div className="row py-2">
        <SIdeBar />

        <div className="col-md-8 text-white" style={{ fontSize: "1.5rem" }}>
          <div className="row">
            <span className="text-left mb-3">Portfolio</span>
          </div>
          <div className="row text-center">
            <div className="col-md-6">
              <div className="col-md-8 border rounded mt-3">
                <img src={p1} alt="portoflio number 1" className="img-fluid"/>
                sms.et
              </div>
              <div className="col-md-8 border rounded mt-5">
              <img src={p1} alt="portoflio number 1" className="img-fluid"/>
                sms.et
              </div>
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
