import React from "react";
import "../style/index.css";
import { Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'
import {AiFillFilePdf} from 'react-icons/ai'
import {MdContactPage } from 'react-icons/md'
import {GiGiftOfKnowledge} from 'react-icons/gi'

const SIdeBar = ({Home, Resume, Portfolio, Contact}) => {

  return (
    <>
      <div className="row mt-0">
        <div
          className="bg-black text-center pb-1 text-decoration-underline text-orange"
          style={{ fontSize: "2rem" }}
        >
          RJ
        </div>
        <div className="col-md-3 col-3 sidebar-item mx-auto bg-orange py-3 pt-5 text-center">
          <Link to="/Home">
           <AiFillHome/>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-3 sidebar-item mx-auto bg-orange py-4 text-center ">
          <Link to="/Resume">
            <AiFillFilePdf/>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-3 sidebar-item mx-auto bg-orange py-4 text-center">
          <Link to="/Portfolio">
           <GiGiftOfKnowledge/>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 col-3 sidebar-item mx-auto bg-orange pt-3 pb-5 text-center">
          <Link to="/Contact">
           <MdContactPage/>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SIdeBar;
