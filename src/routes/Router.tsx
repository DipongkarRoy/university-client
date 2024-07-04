import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { routeGanarator } from "../utils/route.ganarator";
import { adminPath } from "./Admin.routes";
import { StudentRoute } from "./Student.routes";
import { FacultyRoute } from "./Faculty.routes";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children:routeGanarator(adminPath)
  },
  {
    path:'/faculty',
    element:<App/>,
    children:routeGanarator(FacultyRoute)
  },
  {
    path:'/student',
    element:<App/>,
    children:routeGanarator(StudentRoute)
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
export default Router;
