import React from "react";
import "../style/index.css";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiFillFilePdf } from "react-icons/ai";
import { MdContactPage } from "react-icons/md";
import { BsFillBagPlusFill } from "react-icons/bs";

const SIdeBar = ({ Home, Resume, Portfolio, Contact }) => {
  return (
    <>
      <div className="row sidebar-row">
        <div
          className="bg-black text-center pb-1 text-decoration-underline text-orange"
          style={{ fontSize: "2rem" }}
        >
          RJ
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-3 col-12 mx-auto bg-orange py-4 px-3 text-center">
          <div className="row">
            <div className="col-md-12 col-3 mx-auto bg-orange sidebar-item text-center">
              <Link to="/Home">
                <AiFillHome size={30} className="Icons" class={Home}/>
              </Link>
            </div>
            
            <div className="col-md-12 col-3 mx-auto bg-orange sidebar-item text-center">
              <Link to="/Resume">
                <AiFillFilePdf size={30} className="Icons" class={Resume}/>
              </Link>
            </div>

            <div className="col-md-12 col-3 mx-auto bg-orange sidebar-item text-center">
              <Link to="/Portfolio">
                <BsFillBagPlusFill size={30} className="Icons" class={Portfolio}/>
              </Link>
            </div>

            <div className="col-md-12 col-3 mx-auto bg-orange sidebar-item text-center">
              <Link to="/Contact">
                <MdContactPage size={30} className="Icons" class={Contact}/>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SIdeBar;
