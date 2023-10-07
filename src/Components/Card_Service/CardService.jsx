import PropTypes from "prop-types";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const CardService = ({ service }) => {
  return (
    <div className="relative shadow-xl card bg-base-100">
      <div>
        <figure>
          <img
            className="w-full rounded-t-xl h-[300px] object-cover"
            src={service?.image_card}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{service?.title}</h2>
          <p>{service?.description_short}</p>
        </div>
      </div>
      <div className="h-full opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-[#6C2C7080] w-full absolute z-20 rounded-xl">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-[40px] text-white">See Details</h1>
          <div>
            <BsFillArrowRightCircleFill className="text-[40px] text-white"></BsFillArrowRightCircleFill>
          </div>
        </div>
      </div>
    </div>
  );
};
CardService.propTypes = {
  service: PropTypes.object.isRequired,
};

export default CardService;
