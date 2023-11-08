import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const EnrolledCourses = ({ enrolledCourses }) => {
  return (
    <div>
      <Helmet>
        <title>Dashboard ~ Enrolled Courses ~ Smart Academy</title>
      </Helmet>
      <section>
        <SectionTitle
          subHeading={"Online Classes"}
          heading={"Enrolled Courses"}
        ></SectionTitle>
      </section>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Course Name</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses?.map((course, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{course.courseName}</td>
                <td className="px-4 py-2">{course.duration}</td>
                <td className="px-4 py-2">{course.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledCourses;
