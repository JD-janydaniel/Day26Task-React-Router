import React from "react";
import CourseCard from "../Components/CourseCard";

const FullStack = ({ courses }) => {
  let fullStackCourse = courses.slice(0, 12);
  return (
    <div>
      <h1 className="text-center">Full Stack Development</h1>
      <div className="container">
        <div className="row">
          {fullStackCourse.map((element, index) => {
            return <CourseCard element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FullStack;
