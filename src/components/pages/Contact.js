import React from "react";
import "../../index.css";
import SIdeBar from "./SideBar";

const Contact = () => {
  return (
    <>
      <div
        className="container-fluid bg-black py-5"
        style={{ height: "38.2rem" }}
      >
        <div className="row py-5 mx-auto bg-black w-100">
          <SIdeBar />
          <div
            className="col-3 text-white text-decoration-underline mt-3"
            style={{ fontSize: "1.5rem" }}
          >
            Contact Us
            <div className="row mt-3">
                <input type="text" className="form-control mt-3" placeholder="Name"/>
            </div>
            <div className="row mt-3">
                <input type="email" className="form-control mt-3" placeholder="Email"/>
            </div>
            <div className="row mt-3">
                <textarea className="form-control mt-3" placeholder="Message"></textarea>
            </div>
            <div className="row mt-4">
                <a className="btn-orange text-center text-white p-1 rounded border-none" style={{fontSize:
                '1.2rem'}}>Send</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
