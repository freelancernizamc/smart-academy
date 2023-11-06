import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/images/slider2.jpg";
import banner2 from "../../../assets/images/slider3.jpg";
import banner4 from "../../../assets/images/our team.png";
import banner5 from "../../../assets/images/slider2.jpg";
import banner3 from "../../../assets/images/slider3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={banner1} />
        </div>
        <div>
          <img src={banner2} />
        </div>
        <div>
          <img src={banner3} />
        </div>
        <div>
          <img src={banner4} />
        </div>
        <div>
          <img src={banner5} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
