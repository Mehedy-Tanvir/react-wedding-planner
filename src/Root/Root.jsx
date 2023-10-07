import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import NavbarBlack from "../Components/Navbar/NavbarBlack";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  const location = useLocation();
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
      <div className="mb-10"></div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
