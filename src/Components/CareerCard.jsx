import React from "react";

const CareerCard = ({ element, index }) => {
  return (
    <>
      <div className="col-lg-4 col-sm-6 mt-4">
        <div
          className="card shadow-lg"
          style={{ width: "20rem", height: "475px" }}
        >
          <img
            src={element.image}
            style={{ height: "200px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">
              <i>{element.coursesName}</i>
            </h4>

            <p className="card-text"> Available in: {element.language}</p>
            <hr></hr>
            <p className="card-text">{element.payment}</p>
            <p className="card-text">{element.placement}</p>
            <p className="card-text">{element.mentor}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerCard;
