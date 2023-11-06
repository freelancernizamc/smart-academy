import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Banner from "../Home/Banner/Banner";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Details = ({ data }) => {
  const { id } = useParams();
  const selectedCourse = data?.find((c) => c.id === parseInt(id));

  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedCourse = data.find((c) => c.id === parseInt(id));
        setCourse(selectedCourse);
      })
      .catch((error) => console.error(error));
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  const { courseName, imageURL, description, duration, price } = course;

  return (
    <>
      <Banner />
      <section>
        <SectionTitle
          subHeading={"Online Classes"}
          heading={"Course Details"}
        ></SectionTitle>
      </section>
      <div className="flex justify-around items-center my-10">
        <div className="w-1/2 mr-5">
          <img
            style={{ borderRadius: "0 200px 200px 200px" }}
            src={imageURL}
            alt={courseName}
            className="w-full rounded-lg mb-4"
          />
        </div>
        <div className="w-1/2">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl text-black font-bold mb-4">
              Course Name: {courseName}
            </h2>

            <p className="text-gray-700 text-base mb-4">
              Description: {description}
            </p>
            <p className="text-gray-700 text-base">Duration: {duration}</p>
            <p className="text-gray-700 text-base">Price: {price}</p>
          </div>
          <button className="btn btn-primary">
            <Link to="/">Enroll Now</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;
