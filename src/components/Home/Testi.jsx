import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';
import './testi.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Card from './Card';

const Testi = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiperrr"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <SwiperSlide className="slidee">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="slidee">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="slidee">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="slidee">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="slidee">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="slidee">
          <Card />
        </SwiperSlide>
        <SwiperSlide className="slidee">
          <Card />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Testi;
