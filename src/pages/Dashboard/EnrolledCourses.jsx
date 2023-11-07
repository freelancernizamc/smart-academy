import Details from "../Courses/Details";

const EnrolledCourses = ({ enrolledCourses }) => {
  console.log(enrolledCourses);
  return (
    <div>
      <h2>Enrolled Courses</h2>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {enrolledCourses?.map((course, index) => (
            <tr key={index}>
              <td>{course.courseName}</td>
              <td>{course.duration}</td>
              <td>{course.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledCourses;
