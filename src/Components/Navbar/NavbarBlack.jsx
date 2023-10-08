import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";

const NavbarBlack = () => {
  const { user, setLoading, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setLoading(false);
        toast.success("Logged out successfully");
      })
      .catch((error) => toast.error(error.message));
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#6C2C70] text-[18px] underline"
              : "lg:text-[#111] text-[18px]"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      {!user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "lg:text-[#6C2C70] text-[18px] underline"
                : "lg:text-[#111] text-[18px]"
            }
            to="/register"
          >
            Register
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "lg:text-[#6C2C70] text-[18px] underline"
                : "lg:text-[#111] text-[18px]"
            }
            to="/update_profile"
          >
            Update Profile
          </NavLink>
        </li>
      )}
      {user && (
        <li className="order-first md:ml-0 lg:text-[#111] text-[18px]">
          <div className="flex flex-col items-start justify-center gap-2 lg:items-center lg:flex-row">
            <img
              className="h-[40px] w-[40px] object-cover object-center rounded-[50%] mr-2"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://imagizer.imageshack.com/img923/6317/jRVw55.png"
              }
              alt=""
            />
            <p className="font-medium">{user?.displayName}</p>
          </div>
        </li>
      )}
      {user && (
        <li>
          <div
            onClick={handleLogout}
            className="lg:text-[#111] text-[18px] flex items-center gap-1 cursor-pointer"
          >
            <span>Logout</span>
            <BiLogOut className="text-[24px]"></BiLogOut>
          </div>
        </li>
      )}
      {!user && (
        <li>
          <NavLink
            to="/login"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "flex items-center gap-1 lg:text-[#6C2C70] text-[18px] underline"
                : "lg:text-[#111] text-[18px] flex items-center gap-1"
            }
          >
            <span>Login</span>
            <BiLogIn className="text-[24px]"></BiLogIn>
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="container flex items-center justify-between px-2 py-4 mx-auto">
      <img className="w-[200px] md:w-[300px]" src="/logo-dark.png" alt="logo" />
      <div>
        <Toaster />
      </div>
      <ul className="lg:flex hidden items-center uppercase justify-between gap-[60px]">
        {links}
      </ul>
      <div className="dropdown dropdown-left lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <AiOutlineMenu className="text-[36px] text-[#111]" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default NavbarBlack;
