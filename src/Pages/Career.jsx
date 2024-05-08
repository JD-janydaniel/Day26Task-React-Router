import React from "react";
import CareerCard from "../Components/CareerCard";

const Career = ({ careerCourse }) => {
  return (
    <div>
      <h1 className="text-center">Career</h1>
      <div className="container">
        <div className="row">
          {careerCourse.map((element, index) => {
            return <CareerCard element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Career;
