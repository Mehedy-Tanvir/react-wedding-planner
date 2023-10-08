const ContactUs = () => {
  return (
    <div className="py-12 bg-gray-100 font-sans-serif">
      <div className="container px-4 mx-auto">
        <h2 className="text-5xl font-semibold text-[#6C2C71] mb-8">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-start">
            <h3 className="text-3xl font-medium text-[#6C2C71] mb-4">
              Get in Touch
            </h3>
            <p className="leading-relaxed text-[18px] text-gray-700">
              Have questions or want to learn more about our services? Feel free
              to reach out to us. We are here to assist you with all your
              wedding planning needs. Simply use the contact information below
              or fill out the form, and we will get back to you as soon as
              possible.
            </p>
            <div className="mt-4">
              <h4 className="text-2xl font-medium text-[#6C2C71] mb-2">
                Contact Information
              </h4>
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span>{" "}
                instaplanned@gmail.com
                <br />
                <span className="font-semibold">Phone:</span> 03004003954
                <br />
                <span className="font-semibold">Address:</span> The Royale, 188
                East 64th Street
              </p>
            </div>
          </div>
          <div>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-[#6C2C71] text-lg font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 border border-gray-400 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-[#6C2C71] text-lg font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-400 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-[#6C2C71] text-lg font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-2 border border-gray-400 rounded-lg"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#6C2C71] text-white text-lg px-4 py-2 rounded hover:opacity-90"
                >
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

export default ContactUs;
