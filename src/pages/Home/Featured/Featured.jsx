import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <>
      <div>
        <section>
          <SectionTitle
            subHeading={"Online Classes"}
            heading={"Featured Courses"}
          ></SectionTitle>
        </section>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/N0r14KKy/datascience.jpg"
              alt="Data Science"
            />
            <p className="text-2xl ">Data Science and Machine Learning</p>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/wMFJvJGr/digitalm.jpg"
              alt="Digital Marketing"
            />
            <p className="text-2xl text-center ">
              Digital Marketing Strategies
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/TY9QL5bf/artificial.jpg" alt="" />
            <p className="text-2xl ">Introduction to Artificial Intelligence</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.postimg.cc/N0r14KKy/datascience.jpg" alt="" />
            <p className="text-2xl ">Data Science and Machine Learning</p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-center">
        <button className="btn bg-cyan-300 text-black hover:text-white mt-2">
          <Link to="/courses">See All Courses</Link>
        </button>
      </div>
    </>
  );
};

export default Featured;
