import React from "react";
import SIdeBar from "./SideBar";
import "../../index.css";

const Resume = () => {
  return (
    <div className="container-fluid py-5 bg-black">
      <div className="row py-5">
        <SIdeBar />
        <div
          className="col-md-3 text-white text-center"
          style={{ fontSize: "1.5rem" }}
        >
          Portfolio
            <div className="row">
                <div className="col-md-8 border rounded">
                    yes
                </div>
                <div className="col-md-8 border rounded">
                    yes
                </div>
        </div>
        </div>
        <div
          className="col-md-4 text-white text-center"
          style={{ fontSize: "1.5rem" }}
        >
            <div className="row">
                <div className="col-md-8 mx-auto border rounded">
                    yes
                </div>
                <div className="col-md-8 mx-auto border rounded">
                    yes
                </div>
        </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Resume;
