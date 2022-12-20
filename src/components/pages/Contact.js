import React from "react";
import "../../style/index.css";
import SIdeBar from "../SideBar";

import {AiFillGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiFillFacebook} from 'react-icons/ai';


const Contact = () => {

  function handleSubmit (e){
    e.preventDefault();
    window.location.href('/Home');
  }
  

  return (
    <>
      <div className="container-fluid bg-black py-5 Page-Container">
        <div className="row py-5 mx-auto bg-black w-100">
          <div className="col-md-3 col-12 pt-3 ">
            <SIdeBar Contact='active'/>
          </div>
          
          <div
            className="col-md-4 col-12 text-white text-center mt-2"
            style={{ fontSize: "1.5rem" }}
          >
            <form onSubmit={handleSubmit} className="mt-3">
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
            </form>
          </div>
          <div className="col-md-3 col-8 bg-black text-center mx-auto">
            <div className="row ">
              <div
                className="col-12 text-center text-white mt-5"
                style={{ fontSize: "1.5rem" }}
              >
                My Social Links
              </div>
            </div>
            <div className="row mt-4 pt-3">
              <div className="col-md-6 col-12 mx-auto">
                <div className="row">
                  <div className="col-md-6">
                    <AiFillGithub/>
                  </div>
                  <div className="col-md-6 pt-3 text-white">@RaulJosef</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <AiFillLinkedin/>
                  </div>
                  <div className="col-md-6 pt-3 text-white">@RaulJosef</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <AiFillTwitterCircle/>
                  </div>
                  <div className="col-md-6 pt-3 text-white">@RaulJosef</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <AiFillInstagram/>
                  </div>
                  <div className="col-md-6 pt-3 text-white">@RaulJosef</div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <AiFillFacebook/>
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
