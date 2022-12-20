import React from "react";
import PortfolioImg from "../assets/Images/portfolio.jpg";
import '../style/index.css'

const Cards = () => {
  return (
    <div className="col-md-4">
      <div className="col-md-6 mx-auto border rounded mt-3 img-card">
        <img src={PortfolioImg} alt="portoflio number 1" className="img-fluid" />
        Project Name
      </div>
      <div className="col-md-6 mx-auto border rounded mt-5">
        <img src={PortfolioImg} alt="portoflio number 1" className="img-fluid" />
        Project Name
      </div>
      <div className="col-md-6 mx-auto border rounded mt-5">
        <img src={PortfolioImg} alt="portoflio number 1" className="img-fluid" />
        Project Name
      </div>
    </div>
  );
};

export default Cards;
