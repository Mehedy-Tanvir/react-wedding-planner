import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import CardService from "../../Components/Card_Service/CardService";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h1 className="mt-10 text-5xl font-semibold text-center md:mt-20 bold font-sans-serif">
        Our Services
      </h1>
      <div className="grid grid-cols-1 gap-6 px-2 pt-6 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
        {data?.map((service) => (
          <CardService key={service.id} service={service}></CardService>
        ))}
      </div>
    </div>
  );
};

export default Home;
