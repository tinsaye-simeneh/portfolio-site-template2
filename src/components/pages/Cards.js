import React from "react";
import p1 from "../../assets/Images/p1.jpg";

const Cards = () => {
  return (
    <div className="col-md-4">
      <div className="col-md-6 mx-auto border rounded mt-3">
        <img src={p1} alt="portoflio number 1" className="img-fluid" />
        sms.et
      </div>
      <div className="col-md-6 mx-auto border rounded mt-5">
        <img src={p1} alt="portoflio number 1" className="img-fluid" />
        sms.et
      </div>
      <div className="col-md-6 mx-auto border rounded mt-5">
        <img src={p1} alt="portoflio number 1" className="img-fluid" />
        sms.et
      </div>
    </div>
  );
};

export default Cards;
