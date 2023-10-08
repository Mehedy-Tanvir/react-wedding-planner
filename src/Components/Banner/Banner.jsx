import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="min-h-screen hero"
      style={{
        backgroundImage: "url(https://i.ibb.co/VSx4NZp/wedding-banner.png)",
      }}
    >
      <div className="hero-overlay bg-[#6C2C7080]"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <img
            data-aos="fade-down"
            data-aos-duration="2000"
            src="/banner-text.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
