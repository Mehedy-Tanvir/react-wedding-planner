import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import NavbarBlack from "../Components/Navbar/NavbarBlack";

const Root = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className={location.pathname == "/" ? "relative" : ""}>
      {location.pathname == "/" ? (
        <div className="absolute z-50 w-full">
          <Navbar></Navbar>
        </div>
      ) : (
        <NavbarBlack></NavbarBlack>
      )}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
