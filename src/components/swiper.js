import Banner from "@component/components/banner"; 
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; 
import "swiper/css/pagination";

import { Navigation, EffectFade, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {  

  return (
    <div>  
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Banner
            title={"About Us"}
            subtitle={"Get to Know Us More!"}
            backImage={"/assets/banner2.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Banner
            title={"Welcome to Our Company"}
            subtitle={"Join Our Journey"}
            backImage={"/assets/banner.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Banner
            title={"Discover Our Services"}
            subtitle={"Discover Excellence"}
            backImage={"/assets/banner3.png"}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Banner
            title={"Meet Our Team"}
            subtitle={"Experience Quality"}
            backImage={"/assets/banner4.jpg"}
          />
        </SwiperSlide> 
      </Swiper>  
    </div>
  );
};

export default Slider;
