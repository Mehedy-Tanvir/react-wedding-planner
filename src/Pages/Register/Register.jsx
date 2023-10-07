import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="container px-2 mx-auto">
      <div className=" hero">
        <div className="flex-col hero-content">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#6C2C71] font-bold">Register!</h1>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="image url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  {showPassword ? (
                    <AiOutlineEyeInvisible
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className="absolute text-2xl top-3 right-3"
                    ></AiOutlineEyeInvisible>
                  ) : (
                    <AiOutlineEye
                      onClick={() => {
                        setShowPassword(!showPassword);
                      }}
                      className="absolute text-2xl top-3 right-3"
                    ></AiOutlineEye>
                  )}
                </div>
              </div>
              <div className="mt-6 form-control">
                <button className="bg-[#6C2C71] hover:opacity-90 text-white text-3xl h-[60px] px-[20px] rounded-none">
                  Login
                </button>
                <button className="h-[40px] mt-4 w-full text-center border border-[#6C2C71] font-medium text-[#6C2C71] rounded-3xl">
                  Sign In With Google
                </button>
                <p className="mt-4 font-medium text-center text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="text-blue-700">Login</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
