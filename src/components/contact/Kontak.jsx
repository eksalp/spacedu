import React, { useEffect, useRef, useState } from 'react';
import '../Home/awal.css';
import './kontak.css';
import shape from './img/shape.png';
import location from './img/location.png';
import email from './img/email.png';
import phone from './img/phone.png';
import emailjs from '@emailjs/browser';

const Kontak = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll('.input');

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add('focus');
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === '') {
        parent.classList.remove('focus');
      }
    }

    inputs.forEach((input) => {
      input.addEventListener('focus', focusFunc);
      input.addEventListener('blur', blurFunc);
    });

    return () => {
      // Clean up the event listeners when the component is unmounted
      inputs.forEach((input) => {
        input.removeEventListener('focus', focusFunc);
        input.removeEventListener('blur', blurFunc);
      });
    };
  }, []);

  const [formula, setFormula] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    setFormula({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formula.name || !formula.email || !formula.phone || !formula.message) {
      alert('Mohon diisi dengan lengkap');
    } else {
      //kirim data form
      alert('Pesan Telah Terkirim ke Admin Space Education Official. Terima Kasih');
      setFormula({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }

    emailjs.sendForm('service_xc2aacd', 'template_dzlfu63', form.current, 'T07Rb7RSwMoexQUCJ').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <div className="container-contact">
        <span className="big-circle"></span>
        <img src={shape} className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title-contact">Sini merapat..</h3>
            <p className="text">Yokk buat kamu yang mau kepoin Spacedu</p>

            <div className="info">
              <div className="information">
                <img src={location} className="icon" alt="" />
                <p className="info-contact">Asrama Uns, Kota Surakarta, Jawa Tengah 57126</p>
              </div>
              <div className="information">
                <img src={email} className="icon" alt="" />
                <p className="info-contact">spaceduofficial@gmail.com</p>
              </div>
              <div className="information">
                <img src={phone} className="icon" alt="" />
                <p className="info-contact">085172228039</p>
              </div>
            </div>

            <div className="social-media">
              <p>follow sosial media Spacedu :</p>
              <div className="social-icons">
                <a href="https://wa.me/+6285172228039" className="ikonn">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://twitter.com/spaceduofficial" className="ikonn">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/spaceduofficial" className="ikonn">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@spaceeducation" className="ikonn">
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form ref={form} onSubmit={sendEmail} action="index.html" autocomplete="off">
              <h3 className="title">Hubungi Kami</h3>
              <div className="input-container">
                <input onChange={(event) => setFormula({ ...formula, name: event.target.value })} value={formula.name} type="text" name="name" className="input" />
                <label for="">Nama</label>
                <span>Nama</span>
              </div>
              <div className="input-container">
                <input onChange={(event) => setFormula({ ...formula, email: event.target.value })} value={formula.email} type="email" name="email" className="input" />
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input onChange={(event) => setFormula({ ...formula, phone: event.target.value })} value={formula.phone} type="tel" name="phone" className="input" />
                <label for="">No. Telp/WA</label>
                <span>No. Telp/WA</span>
              </div>
              <div className="input-container textarea">
                <textarea value={formula.message} onChange={(event) => setFormula({ ...formula, message: event.target.value })} name="message" className="input"></textarea>
                <label for="">Pesan Buat Spacedu</label>
                <span>Pesan Buat Spacedu</span>
              </div>
              <input type="submit" value="Send" className="btn-contact" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontak;
