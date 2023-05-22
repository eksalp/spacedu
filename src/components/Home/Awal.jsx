import React from 'react';
import './awal.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Carousel from './Carousel';
// import CTA from './CTA';
import Accordionn from './Accordionn';
import Testi from './Testi';
import Stats from './Stats';

const Awal = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="header">
        <div className="header-box">
          <div className="title">
            <h1 className="animate__animated animate__jackInTheBox animate__delay-1s">
              Persiapkan Dirimu
              <br />
              Untuk <span className="blok">Hasil Terbaik</span>
              <br />
              Bersama Spacedu Pasti Bisa!
            </h1>
            <p className="animate__animated animate__fadeInUp animate__delay-1s">
              "Ketika kamu sedang bermalas-malasan, <br />
              ingatlah ribuan pesaingmu sedang berusaha keras untuk mengalahkanmu."
            </p>
          </div>

          <div className="carousel">
            <Carousel />
          </div>
        </div>
      </div>

      <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 320">
        <path
          fill="#b6ceb8"
          fill-opacity="1"
          d="M0,256L48,250.7C96,245,192,235,288,245.3C384,256,480,288,576,282.7C672,277,768,235,864,229.3C960,224,1056,256,1152,261.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <div className="services">
        <div className="container">
          <div className="services-box">
            <div className="box">
              {/* <i className="fa-solid fa-award" data-aos="fade-up" data-aos-duration="1000"></i> */}
              <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                Layanan Kami
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                Spacedu berkomitmen untuk memberikan pengalaman belajar yang berharga dan membantu Anda mencapai potensi maksimal Anda, sehingga Anda dapat berhasil dan meraih kesuksesan di tes CPNS serta Kedinasan.
              </p>
            </div>
            <div className="boxes">
              <div className="boxs">
                <img className="img" src="https://drive.google.com/uc?export=view&id=1Z_x4IQASbJPgmr4AS52ARm6PMz1JLJNF" alt="" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" />
                <div className="desc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
                  <h1>
                    Bingung mau mulai <br />
                    latihan darimana?
                  </h1>
                  <p>Tenang bestie, Spacedu punya buanyak latihan soal tryout yang bisa kamu kerjain dimanapun dan kapanpun, serta soal yang disajikan menggunakan tipe soal HOTS yang bikin kamu jadi terlatih.</p>
                </div>
              </div>
              <div className="boxs">
                <div className="desc" data-aos="fade-up" data-aos-duration="1000">
                  <h1>Pengen tryout tapi gada duit😭😭</h1>
                  <p>Hari gini masih mikir Tryout mehong? Stop bestie, Spacedu punya buanyak promo tryout yang bisa kamu gunakan untuk menghemat duit. Dompet aman, Tryout pun nyaman.</p>
                </div>
                <img className="img" src="https://drive.google.com/uc?export=view&id=1Q-m2G3x3FIHEfdnDdIL43qu91e8sx2bK" alt="" data-aos="zoom-in" data-aos-duration="1000" />
              </div>
              <div className="boxs">
                <img className="img" src="https://drive.google.com/uc?export=view&id=1mf2qOFmzDEJ74YS6_VLmwvvq6ReAbpho" alt="" data-aos="zoom-in" data-aos-duration="1000" />
                <div className="desc" data-aos="fade-up" data-aos-duration="1000">
                  <h1>Pengen ikutan Tryout tapi berskala Nasional?</h1>
                  <p>Wah kebetulan banget nihh, Spacedu menggunakan sistem penilaian yang digabung dengan seluruh peserta dari berbagain mcam daerah di Indonesia. Jadi, kamu bisa mempunyai gambaran persaingan dan keketatan.</p>
                </div>
              </div>
              <div className="boxs">
                <div className="desc" data-aos="fade-up" data-aos-duration="1000">
                  <h1>Pengen punya grup belajar yang isinya rang-orang ambis, huhu</h1>
                  <p>
                    Santuyy, setiap kamu melakukan pembelian tryout, sudah termasuk dengan grup belajar yang isinya orang-orang ambis. Jadi, kamu bisa belajar bareng serta bisa mendapatkan informasi promo Tryout lebih dulu dari Spacedu.
                  </p>
                </div>
                <img className="img" src="https://drive.google.com/uc?export=view&id=1dicOXFhSrg22hfx8NDuXZmT3Xv4DZgt2" alt="" data-aos="zoom-in" data-aos-duration="1000" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Stats />

      <div>
        <div className="services servicess">
          <div className="container">
            <div className="services-box">
              <div className="box">
                <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  Testimoni
                </h1>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  Apa kata mereka?
                </p>
              </div>
            </div>
          </div>
        </div>
        <Testi />
      </div>

      <div className="accordion">
        <div className="services servicess">
          <div className="container">
            <div className="services-box">
              <div className="box">
                <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  Frequently Asked Question
                </h1>
                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  Apa saja yang sering ditanyakan?
                </p>
              </div>
            </div>
          </div>
        </div>
        <Accordionn />
      </div>

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
export default Awal;
