import React from "react";
import "../../index.css";
import SIdeBar from "./SideBar";
import fb from "../../assets/icons/fb.svg";
import ig from "../../assets/icons/ig.svg";
import tw from "../../assets/icons/tw.svg";
import li from "../../assets/icons/li.svg";
import gh from "../../assets/icons/gh.svg";

const Contact = () => {
  return (
    <>
      <div
        className="container-fluid bg-black py-5"
      >
        <div className="row py-5 mx-auto bg-black w-100">
        <div className="col-3 mt-3 pt-5">
        <SIdeBar/>
        </div>
          <div
            className="col-4 text-white text-center mt-2"
            style={{ fontSize: "1.5rem" }}
          >
            Contact Us
            <div className="row mt-4 px-5">
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Name"
              />
            </div>
            <div className="row mt-3 px-5">
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Email"
              />
            </div>
            <div className="row mt-3 px-5">
              <textarea
                className="form-control mt-3"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="row mt-4 px-5">
              <a
                type="submit"
                className="btn-orange text-center text-white p-1 mt-3 rounded border-none"
                href="#Contact"
                style={{ fontSize: "1.2rem" }}
              >
                Send
              </a>
            </div>
          </div>
          <div className="col-3 bg-black ms-5 ps-5">
            <div className="row">
              <div
                className="col-12 text-center text-white mt-2 ms-3"
                style={{ fontSize: "1.5rem" }}
              >
                My Social Links
              </div>
            </div>
            <div className="row mt-4 pt-3">
              <div className="col-6 mx-auto">
                <div className="row">
                  <div className="col-md-6">
                    <img src={gh} alt="github" className="pb-4" />
                  </div>
                  <div className="col-md-6 pt-3 text-white">@RaulJosef</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <img src={li} alt="linkedin" className="pb-4" />
                  </div>
                  <div className="col-md-6 pt-3 text-white">@RaulJosef</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <img src={tw} alt="twitter" className="pb-4" />
                  </div>
                  <div className="col-md-6 pt-3 text-white">@RaulJosef</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <img src={ig} alt="instagram" className="pb-4" />
                  </div>
                  <div className="col-md-6 pt-3 text-white">@RaulJosef</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <img src={fb} alt="facebook" className="pb-4" />
                  </div>
                  <div className="col-md-6 pt-3 text-white">@RaulJosef</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
