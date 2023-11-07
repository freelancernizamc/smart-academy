import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Courses from "../pages/Courses/courses";
import Admission from "../pages/Admission/Admission";
import Details from "../pages/Courses/Details";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import EnrolledCourses from "../pages/Dashboard/EnrolledCourses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) => fetch(`data.json/courses/${params.id}`),
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/enrolledcourses",
        element: <EnrolledCourses />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
