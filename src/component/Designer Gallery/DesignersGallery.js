import React, { useState } from 'react';
import './designersGallery.css';
import d1 from '../images/design1.jpeg'
import d2 from '../images/design2.jpeg'
import d3 from '../images/design3.jpeg'
import d4 from '../images/design4.jpeg'
import d5 from '../images/design5.jpeg'
import d6 from '../images/design6.jpeg'
import d7 from '../images/design7.jpeg'
import d8 from '../images/design8.jpeg'
import d9 from '../images/design9.jpeg'
import d10 from '../images/design10.jpeg'
import d11 from '../images/design11.jpeg'
import d12 from '../images/design12.jpeg'
import d13 from '../images/design13.jpeg'
import d14 from '../images/design14.jpeg'
import d15 from '../images/design15.jpeg'
import d16 from '../images/design16.jpeg'
import d17 from '../images/design17.jpeg'
import d18 from '../images/design18.jpeg'
import d19 from '../images/design19.jpeg'
import d20 from '../images/design20.jpeg'

const designersData = [
  {
    name: "John Doe",
    bio: "Expert in modern minimalist design.",
    gallery: [require("../images/design16.jpeg"), require("../images/design17.jpeg"), require("../images/design18.jpeg"),require("../images/design19.jpeg"), require("../images/design20.jpeg")],
    contact: "john.doe@example.com",
    expertise: "Fashion Design",
    image: require("../images/designer1.jpg") // Add designer profile image
  },
  {
    name: "Jane Smith",
    bio: "Specialist in contemporary interior styles.",
    gallery: [require("../images/design1.jpeg"), require("../images/design2.jpeg"), require("../images/design3.jpeg"),require("../images/design19.jpeg"), require("../images/design20.jpeg")],
    contact: "jane.smith@example.com",
    expertise: "Interior Design",
    image: require("../images/designer2.jpg") // Add designer profile image
  },
  // Add at least 5 more designers
  {
    name: "Bob Smith",
    bio: "Expert in modern minimalist design.",
    gallery: [require("../images/design4.jpeg"), require("../images/design5.jpeg"), require("../images/design6.jpeg"),require("../images/design19.jpeg"), require("../images/design20.jpeg")],
    contact: "john.doe@example.com",
    expertise: "Graphic Design",
    image: require("../images/designer3.avif") // Add designer profile image
  },
  {
    name: "Charlie Davis",
    bio: "Specializes in branding and logos.",
    gallery: [require("../images/design9.jpeg"), require("../images/design7.jpeg"),  require("../images/design8.jpeg")],
    contact: "jane.smith@example.com",
    expertise: "Fashion Design",
    image: require("../images/designer4.webp") // Add designer profile image
  },
  // Add at least 5 more designers
  {
    name: "Alexander Jim",
    bio: "Expert in modern minimalist design.",
    gallery: [require("../images/design10.jpeg"), require("../images/design11.jpeg"), require("../images/design12.jpeg"),require("../images/design19.jpeg"), require("../images/design20.jpeg")],
    contact: "john.doe@example.com",
    expertise: "Fashion Design",
    image: require("../images/designer6.jpg") // Add designer profile image
  },
  {
    name: "Charlie Davis",
    bio: "Specialist in contemporary interior styles.",
    gallery: [require("../images/design13.jpeg"), require("../images/design14.jpeg"), require("../images/design15.jpeg"),require("../images/design19.jpeg"), require("../images/design20.jpeg")],
    contact: "jane.smith@example.com",
    expertise: "Fashion Design",
    image: require("../images/designer5.avif") // Add designer profile image
  },
  // Add at least 5 more designers
];

const DesignersGallery = () => {
  const [selectedDesigner, setSelectedDesigner] = useState(null);

  const showGallery = (designer) => {
    setSelectedDesigner(designer);
  };

  return (
    <>
    <section>
            <div className="container ourdesigns">
                <div className="design">
                    <div data-aos="zoom-in-up">
                        <p>Share your setup with</p>
                    </div>
                    <div data-aos="zoom-in-up">
                        <h3>Plant Decoration Ideas</h3>
                    </div>
                </div>
                <div className="masonary-gallery container">
                    <div className="large">
                        <img src={d1} alt="balcony image" />
                    </div>
                    <div className="medium">
                        <img src={d2} alt="bedroom image" />
                    </div>
                    <div className="small">
                        <img src={d3} alt="pink bathroom image" />
                    </div>
                    <div className="large">
                        <img src={d4} alt="dining table image" />
                    </div>
                    <div className="small">
                        <img src={d5} alt="wardrobe image" />
                    </div>
                    <div className="large">
                        <img src={d6} alt="living area image" />
                    </div>
                    <div className="small">
                        <img src={d7} alt="kitchen image" />
                    </div>
                    <div className="medium">
                        <img src={d8} alt="veranda image" />
                    </div>
                    <div className="small">
                        <img src={d20} alt="dressing table image" />
                    </div>
                    <div className="medium">
                        <img src={d10} alt="mirror image" />
                    </div>
                    <div className="large">
                        <img src={d11} alt="black bedroom image" />
                    </div>
                    <div className="small">
                        <img src={d12} alt="pink dressing table image" />
                    </div>
                    <div className="medium">
                        <img src={d13} alt="sweet home image" />
                    </div>
                    <div className="small">
                        <img src={d14} alt="orange kitchen image" />
                    </div>
                    <div className="large">
                        <img src={d15} alt="white living room image" />
                    </div>
                    <div className="small">
                        <img src={d16} alt="pinkish room image" />
                    </div>
                    <div className="large">
                        <img src={d17} alt="green bedroom image" />
                    </div>
                    <div className="medium">
                        <img src={d18} alt="blue kitchen image" />
                    </div>
                    <div className="medium">
                        <img src={d19} alt="image" />
                    </div>
                </div>
            </div>
        </section>
    <div className="gallery-container">
      <h1>Our Professional Interior Designers</h1>
      <div className="designer-list">
        {designersData.map((designer, index) => (
          <div key={index} className="designer-card">
            <img 
              src={designer.image} 
              alt={`${designer.name} profile`} 
              className="designer-profile-image" // Add a class for styling
            />
            <h2>{designer.name}</h2>
            <p>{designer.bio}</p>
            <p>{designer.expertise}</p>
            <button onClick={() => showGallery(designer)}>
              View Gallery
            </button>
          </div>
        ))}
      </div>

      {selectedDesigner && (
        <div className="designer-gallery">
          <h2>{selectedDesigner.name}'s Gallery</h2>
          <div className="gallery-images">
            {selectedDesigner.gallery.map((image, index) => (
              <img key={index} src={image} alt={`Gallery of ${selectedDesigner.name}`} />
            ))}
          </div>
          <p>Contact: {selectedDesigner.contact}</p>
          <button className="contact-button">Contact Designer</button>
          <button className="close-button" onClick={() => setSelectedDesigner(null)}>
            Close Gallery
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default DesignersGallery;
