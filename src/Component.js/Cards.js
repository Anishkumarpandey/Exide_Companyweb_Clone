import React from "react";

const Cards = (props) => {
  return (
    <>

      <div className="">
        <h6 style={{ color: "blue" }}>{props.a}</h6>
        <div className="card" style={{ width: "" }}>
          <img src={props.b} className="img-fluid" style={{height:"200px"}} alt="" />
          <p className="text-start">
            A leader in packaged power technology, EIL today is India's
            largest storage battery company with widest range of both
            conventional flooded as well as latest VRLA batteries. Apart
            from serving the domestic market the company exports batteries
            which have captured niches in South East Asian and European
            markets.
          </p>
        </div>
      </div>
    </>
  );
};

export default Cards;
