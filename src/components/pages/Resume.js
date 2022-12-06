import React from "react";
import SIdeBar from "../SideBar";
import "../../style/index.css";

const Resume = () => {
  return (
    <div className="container-fluid py-5 bg-black">
      <div className="row py-2">
        <div className="col-3 mt-2 ms-2 pt-5">
          <SIdeBar Resume="active"/>
        </div>
        <div className="col-md-8 text-white" style={{ fontSize: "1.5rem" }}>
          <div className="row">
            <span className="text-center mb-3 text-decoration-underline">
              Resume
            </span>
          </div>
          <div className="row text-center mx-auto mt-3">
            <div className="col-md-6">
              Work Experience
              <div className="col-md-10 bg-white text-black mx-auto border rounded mt-5 pt-2">
                <span
                  className="d-block"
                  style={{ fontSize: "1rem", fontWeight: "bold" }}
                >
                  UI/UX Designer and Frontend Developer
                </span>
                <span className="d-block" style={{ fontSize: "1rem" }}>
                  Remote - Parttime{" "}
                </span>
                <span style={{ fontSize: "1rem" }}>May, 2020 - Present</span>
              </div>
              <div className="col-md-10 bg-white text-black mx-auto border rounded mt-5 pt-2">
                <span
                  className="d-block"
                  style={{ fontSize: "1rem", fontWeight: "bold" }}
                >
                  UI/UX Designer and Frontend Developer
                </span>
                <span className="d-block" style={{ fontSize: "1rem" }}>
                  Remote - Parttime{" "}
                </span>
                <span style={{ fontSize: "1rem" }}>May, 2020 - Present</span>
              </div>
              <div className="col-md-10 bg-white text-black mx-auto border rounded mt-5 pt-2">
                <span
                  className="d-block"
                  style={{ fontSize: "1rem", fontWeight: "bold" }}
                >
                  UI/UX Designer and Frontend Developer
                </span>
                <span className="d-block" style={{ fontSize: "1rem" }}>
                  Remote - Parttime{" "}
                </span>
                <span style={{ fontSize: "1rem" }}>May, 2020 - Present</span>
              </div>
            </div>
            <div className="col-md-6">
              Education
              <div className="col-md-10 bg-white text-black mx-auto border rounded mt-5 pt-2">
                <span
                  className="d-block"
                  style={{ fontSize: "1rem", fontWeight: "bold" }}
                >
                  ElectroMechanical Engineering
                </span>
                <span
                  className="d-block"
                  style={{ fontSize: "1rem", fontWeight: "bold" }}
                >
                  AASTU
                </span>
                <span className="d-block" style={{ fontSize: "1rem" }}>
                  Addis Ababa, Ethiopia{" "}
                </span>
                <span style={{ fontSize: "1rem" }}>May, 2020 - Present</span>
              </div>
              <div className="col-md-10 bg-white text-black mx-auto border rounded mt-5 pt-2">
                <span
                  className="d-block"
                  style={{ fontSize: "1rem", fontWeight: "bold" }}
                >
                  ElectroMechanical Engineering
                </span>
                <span
                  className="d-block"
                  style={{ fontSize: "1rem", fontWeight: "bold" }}
                >
                  AASTU
                </span>
                <span className="d-block" style={{ fontSize: "1rem" }}>
                  Addis Ababa, Ethiopia{" "}
                </span>
                <span style={{ fontSize: "1rem" }}>May, 2020 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
