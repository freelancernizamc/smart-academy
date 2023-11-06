import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Banner from "../Home/Banner/Banner";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Courses = () => {
  const {
    isLoading,
    error,
    isError,
    data: courses,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetch("data.json").then((res) => res.json()),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <Banner />
      <section>
        <SectionTitle
          subHeading={"Online Classes"}
          heading={"Our Courses"}
        ></SectionTitle>
      </section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7">
        {courses.map((course, index) => (
          <div key={index}>
            <img
              className="w-full h-52"
              src={course.imageURL}
              alt={course.courseName}
            />
            <h3 className="text-2xl font-bold">{course.courseName}</h3>

            <p>Duration: {course.duration}</p>
            <p>Price: {course.price}</p>
            <button className="btn btn-primary">
              <Link to={`/details/${course.id}`}>See Details</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;