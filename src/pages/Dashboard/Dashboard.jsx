import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaHome, FaHouseUser, FaMale, FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Details from "../Courses/Details";
import EnrolledCourses from "./EnrolledCourses";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const addCourseToEnrolled = (courses) => {
    setEnrolledCourses([...enrolledCourses, courses]);
  };

  const fetchEnrolledCourses = async () => {
    try {
      // Fetch data here and update enrolledCourses when data is received
      const response = await fetch("data.json/api/enrolled-courses");
      const data = await response.json();
      setEnrolledCourses(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Fetch data here and update enrolledCourses when data is received
    fetchEnrolledCourses().then((data) => {
      setEnrolledCourses(data);
    });
  }, []);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <title>Smart Academy ~ Dashboard</title>
      </Helmet>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#272030] text-white">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <div className="mt-1 pl-8 ml-20"></div>
          <ul className="menu p-4 w-80 ">
            <div>
              <div className="flex flex-col items-center mt-0 -mx-2 ">
                <Link to="/dashboard">
                  <img
                    className="object-cover w-20 h-20 mx-2 rounded-full"
                    src={user?.photoURL}
                    alt="avatar"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <Link to="/dashboard">
                  <h4 className="mx-2 mt-1 font-medium  hover:underline text-white">
                    {user?.displayName}
                  </h4>
                </Link>
                <Link to="/dashboard">
                  <p className="mx-2 mt-1 text-sm font-medium text-gray-300  hover:underline">
                    {user?.email}
                  </p>
                </Link>
              </div>
            </div>

            <div className="mt-4">
              <li>
                <NavLink to="/dashboard/usershome">
                  <FaHome /> Student Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/enrolledcourses">
                  <FaHouseUser /> My Enrolled Courses
                </NavLink>
              </li>
              <div className="divider"></div>
              <li>
                <NavLink to="/">
                  <FaHome /> Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/courses">
                  <FaHouseUser />
                  All Courses
                </NavLink>
              </li>
            </div>
            <li className="mt-40">
              {" "}
              <NavLink onClick={handleLogOut}>Log Out</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
