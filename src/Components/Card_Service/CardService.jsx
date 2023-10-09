import PropTypes from "prop-types";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CardService = ({ service }) => {
  useEffect(() => {
    setTimeout(() => {
      Aos.init();
    }, 3000);
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="2000"
      className="overflow-hidden shadow-xl card bg-base-100"
    >
      <div>
        <figure>
          <img
            className="w-full rounded-t-xl hover:scale-110 transition-scale duration-300 ease-in-out h-[300px] object-cover object-center"
            src={service?.image_card}
            alt="image"
          />
        </figure>
        <div className="flex flex-col h-[320px] card-body">
          <div className="flex-grow">
            <h2 className="card-title">{service?.title}</h2>

            <p>{service?.description_short}</p>
            <p className="text-[#6C2C71] text-2xl">Price: ${service?.price}</p>
          </div>
          <Link to={`/service/${service?.id}`}>
            <div className="bg-[#6C2C71] cursor-pointer hover:opacity-90 p-4">
              <button className="flex items-center justify-center w-full gap-3 text-xl text-white normal-case">
                <span>Show Details</span>
                <BsFillArrowRightCircleFill className="text-[24px] text-white"></BsFillArrowRightCircleFill>
              </button>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="h-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-[#6C2C7080] w-full absolute z-20 rounded-xl">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-[40px] font-work-sans text-white">See Details</h1>
          <div>
            <BsFillArrowRightCircleFill className="text-[40px] text-white"></BsFillArrowRightCircleFill>
          </div>
        </div>
      </div> */}
    </div>
  );
};
CardService.propTypes = {
  service: PropTypes.object.isRequired,
};

export default CardService;
