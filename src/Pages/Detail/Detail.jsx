import { useLoaderData, useParams } from "react-router-dom";
import Error from "../Error/Error";

const Detail = () => {
  const data = useLoaderData();
  const { serviceId } = useParams();

  const service = data.find((service) => service.id == serviceId);
  if (service) {
    return (
      <div className="container flex flex-col items-center justify-center px-2 mx-auto">
        <img
          className="w-full h-full max-w-[80%] max-h-[80%] object-cover rounded-xl mt-10"
          src={service?.image_details}
          alt=""
        />
        <div className="w-full h-full max-w-[80%] max-h-[80%] mt-5">
          <div className="flex flex-col items-center justify-start gap-4 md:flex-row">
            <button className="bg-[#6C2C71] hover:opacity-90 text-white text-3xl h-[60px] px-[20px] rounded-none">
              Buy Now
            </button>
            <h1 className="text-3xl text-[#6C2C71]">
              Price: ${service?.price}
            </h1>
          </div>
          <h1 className="text-2xl font-bold text-[#111] mt-7">
            {service?.title}
          </h1>
          <p className="mt-4 text-base text-gray-500">
            {service?.description_full}
          </p>
        </div>
      </div>
    );
  } else {
    return <Error></Error>;
  }
};

export default Detail;
