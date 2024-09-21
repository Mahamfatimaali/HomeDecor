import React, { useState } from "react";
// import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./feedback.css"; // Assuming you will create a separate CSS file\
import logo from '../images/furnirologo.png';
import feedbackimage from '../images/feedback2.jpg'
const Feedback = () => {
  const [feedback, setFeedback] = useState({
    productSatisfaction: "",
    serviceSatisfaction: "",
    teamSatisfaction: "",
    comments: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedback); // You can replace this with an API call or other action
  };
  
  const sliderSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 2000,
    autoplay: true,
  };

  return (
    <>
    <div className="flex-container">
    <div><img className="flex-image" src={feedbackimage} alt="" /></div>
    <div>
    <div className="feedback-form-container">
      <div className="feedback-header">
        <img src={logo} alt="YourCompany" className="logo" />
        <h2>We value your feedback.</h2>
        <p>Please complete the form and help us improve our customer experience.</p>
      </div>

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="feedback-question">
          <p>How satisfied are you with our product?</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="productSatisfaction"
                value="Very Satisfied"
                onChange={handleChange}
                checked={feedback.productSatisfaction === "Very Satisfied"}
              />
              Very Satisfied
            </label>
            <label>
              <input
                type="radio"
                name="productSatisfaction"
                value="Satisfied"
                onChange={handleChange}
                checked={feedback.productSatisfaction === "Satisfied"}
              />
              Satisfied
            </label>
            <label>
              <input
                type="radio"
                name="productSatisfaction"
                value="Neutral"
                onChange={handleChange}
                checked={feedback.productSatisfaction === "Neutral"}
              />
              Neutral
            </label>
            <label>
              <input
                type="radio"
                name="productSatisfaction"
                value="Unsatisfied"
                onChange={handleChange}
                checked={feedback.productSatisfaction === "Unsatisfied"}
              />
              Unsatisfied
            </label>
            <label>
              <input
                type="radio"
                name="productSatisfaction"
                value="Very Unsatisfied"
                onChange={handleChange}
                checked={feedback.productSatisfaction === "Very Unsatisfied"}
              />
              Very Unsatisfied
            </label>
          </div>
        </div>

        <div className="feedback-question">
          <p>How satisfied are you with our service?</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="serviceSatisfaction"
                value="Very Satisfied"
                onChange={handleChange}
                checked={feedback.serviceSatisfaction === "Very Satisfied"}
              />
              Very Satisfied
            </label>
            <label>
              <input
                type="radio"
                name="serviceSatisfaction"
                value="Satisfied"
                onChange={handleChange}
                checked={feedback.serviceSatisfaction === "Satisfied"}
              />
              Satisfied
            </label>
            <label>
              <input
                type="radio"
                name="serviceSatisfaction"
                value="Neutral"
                onChange={handleChange}
                checked={feedback.serviceSatisfaction === "Neutral"}
              />
              Neutral
            </label>
            <label>
              <input
                type="radio"
                name="serviceSatisfaction"
                value="Unsatisfied"
                onChange={handleChange}
                checked={feedback.serviceSatisfaction === "Unsatisfied"}
              />
              Unsatisfied
            </label>
            <label>
              <input
                type="radio"
                name="serviceSatisfaction"
                value="Very Unsatisfied"
                onChange={handleChange}
                checked={feedback.serviceSatisfaction === "Very Unsatisfied"}
              />
              Very Unsatisfied
            </label>
          </div>
        </div>

        <div className="feedback-question">
          <p>How satisfied are you with our team?</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="teamSatisfaction"
                value="Very Satisfied"
                onChange={handleChange}
                checked={feedback.teamSatisfaction === "Very Satisfied"}
              />
              Very Satisfied
            </label>
            <label>
              <input
                type="radio"
                name="teamSatisfaction"
                value="Satisfied"
                onChange={handleChange}
                checked={feedback.teamSatisfaction === "Satisfied"}
              />
              Satisfied
            </label>
            <label>
              <input
                type="radio"
                name="teamSatisfaction"
                value="Neutral"
                onChange={handleChange}
                checked={feedback.teamSatisfaction === "Neutral"}
              />
              Neutral
            </label>
            <label>
              <input
                type="radio"
                name="teamSatisfaction"
                value="Unsatisfied"
                onChange={handleChange}
                checked={feedback.teamSatisfaction === "Unsatisfied"}
              />
              Unsatisfied
            </label>
            <label>
              <input
                type="radio"
                name="teamSatisfaction"
                value="Very Unsatisfied"
                onChange={handleChange}
                checked={feedback.teamSatisfaction === "Very Unsatisfied"}
              />
              Very Unsatisfied
            </label>
          </div>
        </div>

        <div className="feedback-comments">
          <label htmlFor="comments">Tell us how we can improve</label>
          <textarea
            id="comments"
            name="comments"
            value={feedback.comments}
            onChange={handleChange}
          />
        </div>

        <div className="feedback-contact">
          <p>Would you like a representative to contact you?</p>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="contact"
                value="Yes"
                onChange={handleChange}
                checked={feedback.contact === "Yes"}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="contact"
                value="No"
                onChange={handleChange}
                checked={feedback.contact === "No"}
              />
              No
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
    </div>
    </>
  );
};

export default Feedback;
