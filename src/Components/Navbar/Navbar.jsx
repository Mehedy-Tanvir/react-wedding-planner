import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#6C2C70] text-[18px] underline"
              : "text-[#111] text-[18px]"
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
              ? "text-[#6C2C70] text-[18px] underline"
              : "text-[#111] text-[18px]"
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
              ? "text-[#6C2C70] text-[18px] underline"
              : "text-[#111] text-[18px]"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "flex items-center gap-1text-[#6C2C70] text-[18px] underline"
              : "text-[#111] text-[18px] flex items-center gap-1"
          }
        >
          <span>Login</span>
          <img className="h-[18px]" src="/login-logo.svg" alt="" />
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="container flex items-center justify-between px-2 py-4 mx-auto font-roboto">
      <img className="h-[100px]" src="/logo.png" alt="logo" />
      <ul className="lg:flex hidden items-center justify-between gap-[60px]">
        {links}
      </ul>
      <div className="dropdown dropdown-left lg:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <AiOutlineMenu className="text-[36px]" />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
