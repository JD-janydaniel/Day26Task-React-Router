import React from "react";
import CourseCard from "../Components/CourseCard";

const All = ({ courses }) => {
  return (
    <>
      <h1 className="text-center">All Courses</h1>
      <div className="container">
        <div className="row">
          {courses.map((element, index) => {
            return <CourseCard element={element} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default All;
