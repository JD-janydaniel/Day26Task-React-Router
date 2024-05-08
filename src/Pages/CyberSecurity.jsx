import React from "react";
import CourseCard from "../Components/CourseCard";

const CyberSecurity = ({ courses }) => {
  const cyberSecurity = courses.slice(24, 34);
  return (
    <div>
      <h1 className="text-center">Cyber Security</h1>
      <div className="container">
        <div className="row">
          {cyberSecurity.map((element, index) => {
            return <CourseCard element={element} index={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
