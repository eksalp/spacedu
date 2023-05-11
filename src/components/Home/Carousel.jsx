import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css';
// import required modules
import { Autoplay, Pagination } from 'swiper';

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="swiperr"
      >
        <SwiperSlide className="slide">
          <img src="https://drive.google.com/uc?export=view&id=19MsBD9U0T8IpUj0gp4R31RNwjfIvE4FM" alt="carousel" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://drive.google.com/uc?export=view&id=1xNHVFcESG5tE_0cLQ0O5oI9LjgvjxBwo" alt="carousel" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://drive.google.com/uc?export=view&id=1BhL7T_bqzTc1JomXfg0Cj5nm68aPg73q" alt="carousel" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://drive.google.com/uc?export=view&id=1ycpT74Ren33uvPZsJLQ8wAVjPOfm_hvr" alt="carousel" />
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://drive.google.com/uc?export=view&id=1eDJJEXR2noFPYW_qE_DvWdY_q7G9Bs83" alt="carousel" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
