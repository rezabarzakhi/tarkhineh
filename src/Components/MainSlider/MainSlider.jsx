import React from "react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MainSlide } from "../../db";
import "./MainSlider.css";

export default function MainSlider() {
  SwiperCore.use([Autoplay]);
  return (
    <div className="MainSlider">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}>
        {MainSlide.map((slide) => (
          <SwiperSlide key={slide.id} className="slider-slide">
            <div className="slider-img-filter"></div>
            <img src={slide.img} alt="" className="slider-img" />
            <h2 className="slider-title">{slide.title}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
