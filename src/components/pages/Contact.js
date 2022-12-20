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
    icon: <AiFillGithub size={30} />,
    link: "",
    linkText: "Raul Josef",
  },
  {
    icon: <AiFillLinkedin size={30}/>,
    link: "",
    linkText: "Raul Josef",
  },
  {
    icon: <AiFillTwitterCircle size={30}/>,
    link: "",
    linkText: "Raul Josef",
  },
  {
    icon: <AiFillInstagram size={30}/>,
    link: "",
    linkText: "Raul Josef",
  },
  {
    icon: <AiFillFacebook size={30}/>,
    link: "",
    linkText: "Raul Josef",
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
      <div className="col-md-12 col-12 mx-auto">
        <div className="row border rounded my-1">
        <div className="col-md-8 col-12 my-2 mx-auto Contact-Icon">
        <span className="px-4">{icon.icon}</span>
      <a href={icon.link} className="text-white text-decoration-none">
       {icon.linkText}
      </a>
      </ div>
      </div>
     </div>
    );
  });

  return (
    <>
      <div className="container-fluid pt-2 bg-black Page-Container">
        <div className="row pt-5 bg-black">
          <div className="col-md-3 col-11 mx-auto mt-2">
            <SIdeBar Contact="active" />
          </div>

          <div
            className="col-md-4 col-12 text-white text-center mt-2"
            style={{ fontSize: "1.5rem" }}
          >
            <form onSubmit={handleSubmit} className="mt-3">
              <span className="text-decoration-underline">
              Contact Us
              </span>
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
                className="col-12 col-md-12 text-center text-white mt-4 pt-2 ms-3"
              >
                <h4 className="text-decoration-underline">
                My Social Links
                </h4>
              </div>
            </div>
            <div className="row mt-4">{SocialLinks}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
