
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Card from "./Card";

function SwiperSlider({ allData, type }) {
  let productsList = allData?.map((item) => {
    return (
      <SwiperSlide className="py-5">
        <Card data={item} type={type} className="bg-bg-main" />
      </SwiperSlide>
    );
  });

  return (
    <div className="">
      <div className="">
        <Swiper
          style={{ height: "auto" }}
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper"
          modules={[Autoplay]}
          loop={allData?.length > 5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            520: { slidesPerView: 3, spaceBetween: 15 },
            768: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1400: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {productsList}
        </Swiper>
      </div>
    </div>
  );
}

export default SwiperSlider;
