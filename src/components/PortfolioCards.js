import React from "react";
import PortfolioImg from "../assets/Images/portfolio.jpg";
import '../style/index.css'

const Cards = () => {
  return (
    <div className="col-md-4">
      <div className="col-md-9 col-12 mx-auto border mt-3">
        <img src={PortfolioImg} alt="portoflio number 1" className="img-fluid img-card" />
        <hr/>
        <p>Project Name</p>
      </div>
      <div className="col-md-9 col-12 mx-auto border mt-5">
        <img src={PortfolioImg} alt="portoflio number 1" className="img-fluid img-card" />
        <hr/>
        <p>Project Name</p>
      </div>
    </div>
  );
};

export default Cards;
