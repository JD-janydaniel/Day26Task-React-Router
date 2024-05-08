import React from "react";
import CourseCard from "../Components/CourseCard";

const DataScience = ({ courses }) => {
  const dataScience = courses.slice(12, 24);
  return (
    <div>
      <h1 className="text-center">Data Science</h1>
      <div className="container">
        <div className="row">
          {dataScience.map((element, index) => {
            return <CourseCard element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default DataScience;
