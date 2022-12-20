import React from "react";
import SIdeBar from "../SideBar";
import "../../style/index.css";

import { Education, Work } from "../ResumeData";

const Resume = () => {

  const EducationData = Education.map((item, index) => {
    return (
      <div className="col-md-10 bg-white text-black mx-auto border rounded mt-5 pt-2">
       <span
        className="d-block"
        style={{ fontSize: "1rem", fontWeight: "bold" }}
      >
        {item.title} -  {item.location}
      </span>
      <span className="d-block" style={{ fontSize: "0.8rem" }}>
       
      </span>
      <span style={{ fontSize: "1rem" }}>{item.date}</span>
      <p style={{ fontSize: "0.8rem" }}> {item.description} </p>
    </div>
    );
  });
  const WorkData = Work.map((item, index) => {
    return (
      <div className="col-md-10 bg-white text-black mx-auto border rounded mt-5 pt-2">
      <span
        className="d-block"
        style={{ fontSize: "1rem", fontWeight: "bold" }}
      >
        {item.title} -  {item.location}
      </span>
      <span className="d-block" style={{ fontSize: "0.8rem" }}>
       
      </span>
      <span style={{ fontSize: "1rem" }}>{item.date}</span>
      <p style={{ fontSize: "0.8rem" }}> {item.description} </p>
    </div>
    );
  });


  return (
    <div className="container-fluid pb-5 pt-3 bg-black Page-Container">
      <div className="row py-2">
        <div className="col-md-3 col-11 mx-auto mt-2">
          <SIdeBar Resume="active"/>
        </div>
        <div className="col-md-8 text-white" style={{ fontSize: "1.5rem" }}>
          <div className="row">
            <span className="text-center mb-3 text-decoration-underline header-text">
              Resume
            </span>
          </div>
          <div className="row text-center mx-auto mt-3">
            <div className="col-md-6">
              Work Experience
             {WorkData}
            </div>
            <div className="col-md-6 col-12 header-text">
              Education
              {EducationData}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
