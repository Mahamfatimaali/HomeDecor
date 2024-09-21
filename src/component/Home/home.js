
// const Home = () => {
//     return (
// <h1>Home</h1>
//     );
// }
// export default Home;
// homepage.js
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import bannerImage1 from '../images/background2.jpg';
import bannerImage2 from '../images/background4.jpg';
import bannerImage3 from '../images/background5.jpg';
import furniture from '../images/furniture.webp'
import kitchen from '../images/kitchen.jpg'
import lighning from '../images/lightning.jpg'
import decor from '../images/decor.png'
import bathroom from '../images/bathroom.jpg'
import rect2 from '../images/background3.jpg'



const Home = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        if (bannerRef.current) {
          $(bannerRef.current).slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
          });
        }
      } catch (error) {
        console.error('Slick initialization error:', error);
      }
    }, 100);
  
    AOS.init();
  }, []);
  

  return (
    <main>
      <section className="homepage-section">
        <div className="banner banner-container">
          <div className="banner-image" ref={bannerRef}>
            <img src={bannerImage1} alt="Image 1" />
            <img src={bannerImage2} alt="Image 2" />
            <img src={bannerImage3} alt="Image 3" />
          </div>

          <div className="box container-box">
          <h1>WELCOME TO HOME STYLER</h1>
          <p>Discover a wide variety of plants and gardening essentials. Whether you’re a seasoned gardener or just starting out, we have everything you need to create a lush and vibrant home garden.</p>
            <div className="homepage-btn">
              <a className="btn-1" href="/about">ABOUT US</a>
            </div>
          </div>
        </div>
      </section>
      <section className="homepagebrowsetherange-section2">
          <h2>Browse The Categories</h2>
          <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <p className="Browsep2">beauty into home for a calming oasis</p>
          <div className="imagesbrowse-row container">
            <div className="diningpic-col1" data-aos="flip-left">
              <img src={furniture} alt="dining1" />
              <h3>Furniture</h3>
            </div>
            <div className="livingroom-col2" data-aos="flip-up">
              <img src={kitchen} alt="livingroom" />
              <h3>Kitchen</h3>
            </div>
            <div className="bedroom-col3" data-aos="flip-right">
              <img src={lighning} alt="bedroom" />
              <h3>Lightning</h3>
            </div>
          </div>
          <div className="imagesbrowse-row container imagesbrowse-row-center">
            <div className="diningpic-col1" data-aos="flip-left">
              <img src={decor} alt="dining1" />
              <h3>Decor</h3>
            </div>
            <div className="livingroom-col2" data-aos="flip-up">
              <img src={bathroom} alt="livingroom" />
              <h3>Bathroom</h3>
            </div>
          </div>
        </section>
        <section className="desc-section3">
          <div className="container">
            <div className="desc-section3-row">
              <div data-aos="fade-right">
                <div className="section3-col">
                <h2>50+ Stunning furniture Interiors</h2>
<p>Our expert horticulturists have created numerous inspiring plant arrangements to bring nature's beauty into your home.</p>

                </div>
              </div>
              <div data-aos="fade-up">
                <div className="section3-col2 slider-section3">
                  {/* Slider content can be added here */}
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="section3-col3">
                  <img src={rect2} alt="rect2 img" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="desc-section4">
          <div className="desc-4-row container">
            <div className="desc-heading container" data-aos="zoom-in">
              <h5>Do you have any Question?</h5>
            </div>
            <div className="desc-btn container" data-aos="zoom-in">
              <a href="./blog/blog.html" className="btn">Click Here</a>
            </div>
          </div>
        </section>

 

    </main>
  );
};

export default Home;
