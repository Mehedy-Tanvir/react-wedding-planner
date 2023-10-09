import { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const UpdateProfile = () => {
  const { profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const imageUrl = e.target.image.value;
    profileUpdate(name, imageUrl)
      .then(() => {
        e.target.name.value = "";
        e.target.image.value = "";
        navigate("/");
        toast.success("Profile updated successfully");
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="container h-screen px-2 mx-auto">
      <div>
        <Toaster />
      </div>
      <div className=" hero">
        <div className="flex-col hero-content">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#6C2C71] font-bold">
              Update Profile!
            </h1>
          </div>
          <div className="flex-shrink-0 w-full md:w-[400px] shadow-2xl card">
            <form onSubmit={handleSubmit} className="card-body">
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
                <div className="">
                  <input
                    name="image"
                    type="text"
                    placeholder="image url"
                    className="w-full input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="mt-6 form-control">
                <input
                  className="bg-[#6C2C71] hover:opacity-90 text-white text-3xl h-[60px] px-[20px] rounded-none"
                  type="submit"
                  value="Update"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
