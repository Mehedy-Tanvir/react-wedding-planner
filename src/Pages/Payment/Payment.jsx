import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Your payment was successful");
    navigate("/");
  };
  return (
    <div className="container px-2 mx-auto">
      <Toaster />
      <div className="hero">
        <div className="flex-col hero-content">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-[#6C2C71] font-bold">Payment</h1>
          </div>
          <div className="flex-shrink-0 w-full md:w-[400px] shadow-2xl card">
            <form onSubmit={handleSubmit} className="card-body">
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
                  <span className="label-text">Card Information</span>
                </label>
                <input
                  name="card-number"
                  type="number"
                  placeholder="0000 0000 0000 0000"
                  className="input input-bordered"
                  required
                />
                <div className="flex justify-center items-center gap-[12px] mt-2">
                  <input
                    name="date"
                    type="text"
                    placeholder="MM/YY"
                    className="input input-bordered w-[100%]"
                    required
                  />
                  <input
                    name="card-number"
                    type="text"
                    placeholder="CVC"
                    className="input input-bordered w-[100%]"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name on card</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="mt-6 form-control">
                <button className="bg-[#6C2C71] hover:opacity-90 text-white text-3xl h-[60px] px-[20px] rounded-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
