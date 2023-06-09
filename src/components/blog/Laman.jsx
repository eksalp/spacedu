import React from 'react';
import '../Home/awal.css';
import './laman.css';
// import BlogCard from './BlogCard';

const Laman = () => {
  return (
    <>
      <div className="header">
        <div className="header-box">
          <div className="title">
            <h1 className="animate__animated animate__jackInTheBox animate__delay-1s">
              Spacedu
              <br />
              Blog & Tips
            </h1>
          </div>
        </div>
      </div>

      <svg className="svg pendek" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320">
        <path
          fill="#b6ceb8"
          fill-opacity="1"
          d="M0,256L48,250.7C96,245,192,235,288,245.3C384,256,480,288,576,282.7C672,277,768,235,864,229.3C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      {/* <BlogCard /> */}
      <div className="comings">
        <img className="comingsoon" src="https://drive.google.com/uc?export=view&id=1RrsgM-in__vIucEjisj7FRZV6mfmiVb0" alt="" />
      </div>
      {/* <div className="services oi">
        <div className="container">
          <div className="services-box">
            <div className="box">
              <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                Promo mendatang
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                Nantikan promo mendatang selanjutnya. Pantau terus media sosial dan website Spacedu dan Jangan sampai ketinggalan 😊😊.
              </p>
            </div>
            <div className="boxes">
              <div className="boxs">
                <img className="img" src="https://drive.google.com/uc?export=view&id=1ohmM_Xv2tCVKgSFR5dvsc9UWhhmlH_XQ" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" />
                <div className="desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                  <h1>
                    Website <br />
                    Development
                  </h1>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex explicabo perferendis nisi quo. Deserunt magni doloribus quas! Eaque ullam, adipisci tenetur ad, obcaecati dolorem nobis voluptatibus dolores earum autem
                    possimus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <svg className="svg svgg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b6ceb8"
          fill-opacity="1"
          d="M0,128L40,144C80,160,160,192,240,186.7C320,181,400,139,480,149.3C560,160,640,224,720,224C800,224,880,160,960,149.3C1040,139,1120,181,1200,181.3C1280,181,1360,139,1400,117.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </>
  );
};

export default Laman;
