const AboutUs = () => {
  return (
    <div className="font-sans-serif">
      <div className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-5xl font-sans-serif font-semibold text-[#6C2C71] mb-8">
            About Us
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex flex-col justify-start">
              <h3 className="text-2xl font-semibold text-[#6C2C71] mb-4">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-700">
                At <span className="font-semibold">Instaplanned</span>, we are
                passionate about turning your dreams into reality and creating
                unforgettable moments that will be cherished for a lifetime.
                With a dedicated team of experienced wedding planners, we are
                committed to providing you with exceptional service and bringing
                your vision to life.
              </p>
              <div className="hidden lg:block relative self-center mt-10 w-[50%] h-[50%]">
                <div className="w-full h-full border-[13px] shadow-2xl rounded-lg z-10 border-white bg-[#6C2C70]"></div>

                <img
                  className="w-full h-full border-[13px] object-cover object-center shadow-2xl rounded-lg absolute bottom-0 rotate-[15deg] z-20 border-white bg-[#6C2C70]" //
                  src="/about.jpg"
                  alt=""
                />
              </div>
              <div className="self-center mt-4 lg:hidden">
                <img
                  className="w-full h-full border-[13px] object-cover object-center shadow-2xl rounded-lg border-white bg-[#6C2C70]" //
                  src="/about.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <h3 className="text-2xl font-semibold text-[#6C2C71] mb-4">
                Why Choose Us?
              </h3>
              <ul className="text-gray-700 list-disc list-inside">
                <li className="mb-2">
                  <span className="font-semibold">Expertise:</span> Our team of
                  wedding experts has years of experience in the industry. We
                  have a deep understanding of the latest trends and timeless
                  traditions, ensuring that your wedding is a perfect blend of
                  the old and the new.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Attention to Detail:</span> We
                  believe that its the little details that make a big
                  difference. From decor and theme design to vendor sourcing and
                  guest management, we pay meticulous attention to every aspect
                  of your wedding to ensure its flawless.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Personalization:</span> Your
                  wedding is a reflection of your love story, and we take pride
                  in creating personalized experiences. We work closely with you
                  to understand your style, preferences, and dreams, tailoring
                  every detail to suit your unique taste.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Stress-Free Planning:</span>{" "}
                  Planning a wedding can be overwhelming, but it doesnt have to
                  be. Our goal is to alleviate the stress and handle all the
                  logistics, so you can focus on enjoying this special time in
                  your life.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Exceptional Service:</span> We
                  are committed to providing the highest level of service to our
                  clients. Our team is dedicated to making your wedding day not
                  only beautiful but also memorable for all the right reasons.
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 text-gray-700">
            <span className="font-semibold">
              Let Us Be Part of Your Journey
            </span>
            <br />
            We are excited to embark on this journey with you and be part of
            your love story. Whether you are planning an intimate celebration or
            a grand affair, <span className="font-semibold">
              Instaplanned
            </span>{" "}
            is here to make it a reality. Contact us today to start planning the
            wedding of your dreams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
