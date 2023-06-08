import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';
import './testi.css';
import './card.css';
import { testidata } from './testidata';

const Testi = () => {
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
      >
        {testidata.map((item, index) => {
          return (
            <SwiperSlide key={index} className="slidee">
              <div className="card">
                <img className="card-image" src={item.link} alt="Gambar" />
                <div className="card-content">
                  <h2 className="card-title">{item.nama}</h2>
                  <h6>{item.lulus}</h6>
                  <p className="card-subtitle">{item.kata}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Testi;
