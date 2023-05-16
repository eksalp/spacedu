import React, { useEffect } from 'react';
import '../Home/awal.css';
import './kontak.css';
import shape from './img/shape.png';
import location from './img/location.png';
import email from './img/email.png';
import phone from './img/phone.png';

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
  return (
    <>
      <div className="container-contact">
        <span className="big-circle"></span>
        <img src={shape} className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title-contact">Let's get in touch</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum adipisci recusandae praesentium dicta!</p>

            <div className="info">
              <div className="information">
                <img src={location} className="icon" alt="" />
                <p className="info-contact">92 Cherry Drive Uniondale, NY 11553</p>
              </div>
              <div className="information">
                <img src={email} className="icon" alt="" />
                <p className="info-contact">lorem@ipsum.com</p>
              </div>
              <div className="information">
                <img src={phone} className="icon" alt="" />
                <p className="info-contact">123-456-789</p>
              </div>
            </div>

            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons">
                <a href="https://www.instagram.com/" className="ikonn">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/" className="ikonn">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/" className="ikonn">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.instagram.com/" className="ikonn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" autocomplete="off">
              <h3 className="title">Contact us</h3>
              <div className="input-container">
                <input type="text" name="name" className="input" />
                <label for="">Username</label>
                <span>Username</span>
              </div>
              <div className="input-container">
                <input type="email" name="email" className="input" />
                <label for="">Email</label>
                <span>Email</span>
              </div>
              <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label for="">Phone</label>
                <span>Phone</span>
              </div>
              <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label for="">Message</label>
                <span>Message</span>
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
