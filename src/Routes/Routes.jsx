import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Courses from "../pages/Courses/courses";
import Admission from "../pages/Admission/Admission";
import Details from "../pages/Courses/Details";

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
    ],
  },
]);
