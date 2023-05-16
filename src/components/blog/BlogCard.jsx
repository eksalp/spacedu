import React, { useEffect } from 'react';
import './laman.css';
import { blogg } from './blogg';

const BlogCard = () => {
  useEffect(() => {
    const loadMoreBtn = document.querySelector('#load-more');
    let currentItem = 3;

    const handleLoadMore = () => {
      const boxes = [...document.querySelectorAll('.container .box-container .box')];
      for (let i = currentItem; i < currentItem + 3; i++) {
        boxes[i].style.display = 'inline-block';
      }
      currentItem += 3;

      if (currentItem >= boxes.length) {
        loadMoreBtn.style.display = 'none';
      }
    };

    loadMoreBtn.addEventListener('click', handleLoadMore);

    return () => {
      loadMoreBtn.removeEventListener('click', handleLoadMore);
    };
  }, []);
  return (
    <div class="container">
      <div className="services">
        <div className="">
          <div className="services-box">
            <div className="box">
              {/* <i className="fa-solid fa-award" data-aos="fade-up" data-aos-duration="1000"></i> */}
              <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                Promo mendatang
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                Nantikan promo mendatang selanjutnya. Pantau terus media sosial dan website Spacedu dan Jangan sampai ketinggalan 😊😊.
              </p>
            </div>
            <div class="box-container">
              {blogg.map((item, index) => {
                return (
                  <div class="box" key={index}>
                    <div class="image">
                      <img src="https://drive.google.com/uc?export=view&id=1ohmM_Xv2tCVKgSFR5dvsc9UWhhmlH_XQ" alt="" />
                    </div>
                    <div class="content">
                      <h3>{item.judul}</h3>
                      <p>{item.subjudul}</p>
                      <a href={item.link} class="btn">
                        read more
                      </a>
                      <div class="icons">
                        <span>
                          {' '}
                          <i class="fas fa-calendar"></i> {item.tanggal}{' '}
                        </span>
                        <span>
                          {' '}
                          <i class="fas fa-user"></i> by {item.author}{' '}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="load-more">Load more</div>
      </div>
    </div>
  );
};

export default BlogCard;
