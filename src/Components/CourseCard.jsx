import React from "react";

const CourseCard = ({ element, index }) => {
  return (
    <>
      <div className="col-lg-3 col-sm-6  mt-4">
        <div
          className="card shadow-lg "
          style={{ width: "18rem", height: "375px" }}
        >
          <img
            src={element.image}
            style={{ height: "200px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{element.coursesName}</h5>
            <p className="card-text"> By: {element.tutorName}</p>
            <p className="card-text">{element.date}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
