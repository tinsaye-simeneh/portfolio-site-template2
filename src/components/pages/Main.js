import React from "react";
import "../../index.css";
import Profile from "../../assets/Images/profile.png";

let Main = () => {
  return (
    <div className="container-fluid bg-black py-5" style={{height: '41.45rem'}}>
      <div className="row py-5 mx-auto bg-black w-100">
        <div className="col-3 mt-5 pt-5">
          <div className="row mt-4">
            <div className="col-3 mx-auto bg-warning">
              <h1 className="text-white">1</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3 mx-auto bg-warning">
              <h1 className="text-white">1</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3 mx-auto bg-warning">
              <h1 className="text-white">1</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3 mx-auto bg-warning">
              <h1 className="text-white">1</h1>
            </div>
          </div>
        </div>
        <div className="col-3 ms-3 border-none rounded">
            <img src={Profile} alt="random" className="img-fluid"/>
        </div>
        <div className="col-5 bg-dark">
          <p className="text-center text-white">third Column</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
