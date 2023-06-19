import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./BranchesPhotosSlider.css";

import { BranchesData } from "../../db";
import { CloseSquare } from "iconsax-react";

export default function BranchesPhotosSlider({setIsShowSlider , sliderBranchID}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="BranchesPhotosSlider">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="BranchesPhotosSlider-photos">
        {BranchesData[sliderBranchID].images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} />
          </SwiperSlide>
        ))}
        <CloseSquare className="BranchesPhotosSlider-close" onClick={() => setIsShowSlider(false)} />
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={1}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="BranchesPhotosSlider-tumbs">
        {BranchesData[1].images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
