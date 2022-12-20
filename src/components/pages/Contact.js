import React from "react";
import "../../style/index.css";
import SIdeBar from "../SideBar";

import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

const Social = [
  {
    icon: <AiFillGithub size={30}/>,
    link: "",
    linkText: "Github",
  },
  {
    icon: <AiFillLinkedin size={30}/>,
    link: "",
    linkText: "LinkedIn",
  },
  {
    icon: <AiFillTwitterCircle size={30}/>,
    link: "",
    linkText: "Twitter",
  },
  {
    icon: <AiFillInstagram size={30}/>,
    link: "",
    linkText: "Instagram",
  },
  {
    icon: <AiFillFacebook size={30}/>,
    link: "",
    linkText: "Facebook",
  },
];

const Contact = () => {
  function handleSubmit(e) {
    e.preventDefault();
    window.location.href("/Home");
  }

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const SocialLinks = Social.map((icon, index) => {
    return (
      <div className="col-md-12 col-12 bg-primary mx-auto">
        <div className="row bg-warning">
        <div className="col-md-8 col-12 bg-danger my-2 text-left mx-auto">
        <span className="px-4">{icon.icon}</span>
      <span href={icon.link} className="text-white d-inline">
       {icon.linkText}
      </span>
      </ div>
      </div>
     </div>
    );
  });

  return (
    <>
      <div className="container-fluid bg-black py-5 Page-Container">
        <div className="row py-5 mx-auto bg-black w-100">
          <div className="col-md-3 col-12 pt-3 ">
            <SIdeBar Contact="active" />
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
                  onClick={() => {
                    setName("");
                  }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="row mt-3 px-5">
                <input
                  type="email"
                  className="form-control mt-3"
                  placeholder="Email"
                  onClick={() => {
                    setEmail("");
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="row mt-3 px-5">
                <textarea
                  className="form-control mt-3"
                  placeholder="Message"
                  onClick={() => {
                    setMessage("");
                  }}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
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
            <div className="row">
              <div
                className="col-12 col-md-12 text-center text-white mt-5"
              >
                My Social Links
              </div>
            </div>
            <div className="row mt-4 pt-3">{SocialLinks}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
