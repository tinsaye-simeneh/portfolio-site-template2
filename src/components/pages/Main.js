import React from "react";
import "../../index.css";
import Profile from "../../assets/Images/profile.png";

let Main = () => {
  return (
    <div className="container-fluid bg-black py-5">
      <div className="row py-5 mx-auto bg-warning w-75">
        <div className="col-3">
          <div className="row">
            <div className="col-3 mx-auto bg-danger">
              <h1 className="text-white">1</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3 mx-auto bg-danger">
              <h1 className="text-white">1</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3 mx-auto bg-danger">
              <h1 className="text-white">1</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3 mx-auto bg-danger">
              <h1 className="text-white">1</h1>
            </div>
          </div>
        </div>
        <div className="col-3 bg-secondary border rounded">
            <img src="https://picsum.photos/200/300" alt="random" className="img-fluid"/>
        </div>
        <div className="col-5 bg-dark">
          <p className="text-center text-white">third Column</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
