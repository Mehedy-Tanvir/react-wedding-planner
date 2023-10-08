import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <img src="/logo-dark.png" alt="" />
      <h1 className="text-4xl font-bold text-center text-[#0B0B0BB3]">
        Error 404! Page not found!
      </h1>
      <Link to="/">
        <button className="bg-[#6C2C71] hover:opacity-90 text-white text-2xl font-semibold h-[60px] px-[20px] rounded-none">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
