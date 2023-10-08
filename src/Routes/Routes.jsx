import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Detail from "../Pages/Detail/Detail";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivateRoutes from "./PrivateRoutes";
import Payment from "../Pages/Payment/Payment";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/update_profile",
        element: (
          <PrivateRoutes>
            <UpdateProfile></UpdateProfile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/service/:serviceId",
        element: (
          <PrivateRoutes>
            <Detail></Detail>
          </PrivateRoutes>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/payment",
        element: (
          <PrivateRoutes>
            <Payment></Payment>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
