import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";

const NavbarBlack = () => {
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
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "lg:text-[#6C2C70] text-[18px] underline"
              : "lg:text-[#111] text-[18px]"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
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
    </>
  );
  return (
    <div className="container flex items-center justify-between px-2 py-4 mx-auto">
      <img className="w-[200px] md:w-[300px]" src="/logo-dark.png" alt="logo" />
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
