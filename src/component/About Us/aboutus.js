
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './aboutus.css'
import feedback1 from '../images/feedback-1.png'
import feedback2 from '../images/feedback-2.png'
import feedback3 from '../images/feedback-3.png'
import feedback4 from '../images/feedback-4.png'
import plantImg from '../images/background4.jpg'


function AboutUs(){
    useEffect(() => {
        AOS.init();
      }, []);
      const teamMembers = [
        {
          name: "Marvin McKinney",
          role: "Interior Designer",
          imgSrc: require("../images/team_1.jpg.png"),
        },
        {
          name: "Kathryn Murphy",
          role: "Space Planner",
          imgSrc: require("../images/team_2.jpg.png"),
        },
        {
          name: "Darrell Steward",
          role: "Exhibition Designer",
          imgSrc: require("../images/team_3.jpg.png"),
        },
      ];
    
      const sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplaySpeed: 2000,
        autoplay: true,
      };
    return(
        <div>
        <main>
        <section className="banner-section">
      <div data-aos="zoom-in-up">
        <div className="box">
          <div className="heading1 container">
            <h1>about us</h1>
          </div>
          <div className="para container">
          <p>
          We are an award-winning design studio, specialized in interior architecture, interior design and branding
          concepts for luxury and lifestyle hospitality projects. 

</p>

          </div>
        </div>
      </div>
    </section>
    <section className="section2">
      <div className="h2para container">
        <div className="content container">
          <div 
            data-aos="fade-down" 
            data-aos-easing="linear" 
            data-aos-duration="1500"
          >
            <h2 className="heading2">WE ARE PERFECT TEAM FOR HOME INTERIOR DECORATION</h2>
          </div>
          <div data-aos="fade-right">
                               <p class="introduction">Welcome to Bruno Interiors, a leading interior design company dedicated to
                        transforming spaces into
                        breathtaking works of art. With a passion for design and an unwavering commitment to excellence,
                        we
                        offer our expertise across the United States, bringing your dream interiors to life. At Bruno
                        Interiors, we understand that your living or work environment is an extension of your unique
                        personality and style. Our team of highly skilled designers combines creativity, innovation, and
                        practicality to deliver exceptional interior design solutions tailored to your specific needs
                        and
                        aspirations.</p>
                    <p class="introduction">
                        Whether you're looking to revamp your residential space, create a captivating commercial
                        interior,
                        or seek expert guidance for a remodeling project, Bruno Interiors is your trusted partner. Our
                        vast
                        portfolio showcases our versatility in transforming diverse spaces into stunning, functional,
                        and
                        harmonious settings.</p>
          </div>
        </div>
        <div className="image container">
          <img src={plantImg} alt="OUR DESIGN" />
        </div>
      </div>
      <div className="list container">
        <div>
        <ul className="list1">
  <li className="before">Wide Variety of Plants</li>
  <li className="before">Customer Satisfaction</li>
</ul>
</div>
<div>
  <ul className="list1">
    <li className="before">Sustainable Practices</li>
    <li className="before">Plant Health Guarantee</li>
  </ul>
        </div>
      </div>
    </section>
    <section id="team-members" className="team-member">
      <div
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h2>team members</h2>
      </div>
      <div className="transition-section container">
        {teamMembers.map((member, index) => (
          <div key={index} className="image container">
            <img src={member.imgSrc} alt={member.name} />
            <div className="social-icons container">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://twitter.com/i/flow/login">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="overlay container"></div>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <div className="name">
                <h3>{member.name}</h3>
                <h6>{member.role}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="sec-4">
      <div className="feedback-section container">
        <h3>Clients Feedback</h3>
        <Slider {...sliderSettings} className="slider container">
          <div className="feedback-1 feedbacks container">
            <div className="img_wrap">
              <img src={feedback1} alt="feedback-1" />
            </div>
            <h4>Ralph Edwards</h4>
            <h5>Market Development Manager</h5>
            <p>
              I want to tell you how impressed we were with your help and choices. I will recommend your
              service to anyone who will ask me because I think it was exactly what we needed. Kay has now
              designed two flats for us and each time we’ve been delighted with her professionalism and
              can-do approach to the projects. She not only comes up with innovative and thoughtful design
              schemes, but she also follows through with the builders and contractors to make sure the design
              vision is realized to a great standard. We are more than happy with her services and would
              definitely use her again and recommend her.
            </p>
            <div className="stars container">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
            </div>
          </div>

          <div className="feedback-2 feedbacks container">
            <div className="img_wrap">
              <img src={feedback2} alt="feedback-2" />
            </div>
            <h4>Flavia John</h4>
            <h5>Visual Merchandiser</h5>
            <p>
              Thank you for introducing us to Tanith. She is a lovely interior designer, very competent and
              fast in response to emails and inquiries. She is great at working to what you like, always
              listens and is very patient when one changes one’s mind! I’ve enjoyed working with her and
              can thoroughly recommend her. I think Sophie was great: very practical, efficient as well as
              creative, really understood what we were trying to achieve, and came up with some lovely
              designs. She was really on top of everything.
            </p>
            <div className="stars container">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
            </div>
          </div>

          <div className="feedback-3 feedbacks container">
            <div className="img_wrap">
              <img src={feedback3} alt="feedback-3" />
            </div>
            <h4>Black Michael</h4>
            <h5>Industrial Designer</h5>
            <p>
              Your designers did a fantastic job - not only is the design beautiful and 100% suited to our
              lifestyle, the delivery was seamless and to the highest standards. They made the whole
              process feel easy from start to finish. Their design recommendations were always spot on,
              yet they were very open to our ideas and always acted on our input. The project coordination
              with the contractor they recommended really exceeded our expectations - delivery was timely
              and high quality, and everything was happening in the right sequence and at pace.
            </p>
            <div className="stars container">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
            </div>
          </div>

          <div className="feedback-4 feedbacks container">
            <div className="img_wrap">
              <img src={feedback4} alt="feedback-4" />
            </div>
            <h4>Madam De Mauban</h4>
            <h5>Interior Documentor</h5>
            <p>
              Paul transformed my new one-bedroom conversion into a beautiful, practical, and supremely
              comfortable living space, redesigning every room from top to bottom. After listening to my
              initial ideas, he offered his own inspirational suggestions, provided mood boards and 3D
              designs to help visualize the layout, and helped to narrow down the options, so I was never
              overwhelmed with too many choices. He was a pleasure to work with throughout – friendly,
              enthusiastic, creative, and adaptable. I wouldn’t hesitate to hire him again for my next
              project.
            </p>
            <div className="stars container">
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
              <i className="fa-sharp fa-solid fa-star"></i>
            </div>
          </div>
        </Slider>
      </div>
    </section>
        </main>
        </div>
    );
}
export default AboutUs;