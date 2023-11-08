import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home ~ Smart Academy</title>
      </Helmet>
      <Banner />
      <div className="my-10">
        <Featured />
      </div>
      <FeedBack />
    </div>
  );
};

export default Home;
