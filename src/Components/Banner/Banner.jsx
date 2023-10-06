const Banner = () => {
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
          <img src="/banner-text.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
