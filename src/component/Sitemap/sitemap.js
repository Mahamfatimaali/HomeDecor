import React from 'react';
import './sitemap.css';

const Sitemap = () => {
  return (
    <div className="sitemap-container">
      <h1>Sitemap</h1>
      <ul className="sitemap-list">
        <li>
          <span>Home</span>
          <li><a href="/Home">home.js</a></li>
          <li><a href="/">home.css</a></li>
        </li>
        <li>
          <span>About Us</span>
          <ul>
            <li><a href="/AboutUs">aboutus.js</a></li>
            <li><a href="">aboutus.css</a></li>
          </ul>
        </li>
        <li>
          <span>Design Styles</span>
          <ul>
          <li><a href="/DesignerGallery">designersGaller.js</a></li>
          <li><a href="">designersGaller.css</a></li>
          </ul>
        </li>
        <li>
          <span>Designer Gallery</span>
          <ul>
            <li><a href="/DesignStyles">designersGallery.js</a></li>
            <li><a href="">designersGaller.css</a></li>
          </ul>
        </li>
        <li>
          <span>Feedback</span>
          <ul>
            <li><a href="/Feedback">feedback.js</a></li>
            <li><a href="">designersGaller.css</a></li>
          </ul>
        </li>
        <li>
          <span>Products</span>
          <ul>
            <li><a href="/Furniture">FunitureCatogaries.js</a></li>
            <li><a href="">FunitureCatogaries.css</a></li>
            <li><a href="">data.json</a></li>
          </ul>
        </li>
        <li>
          <span>About Us</span>
          <ul>
            <li><a href="/AboutUs">aboutus.js</a></li>
            <li><a href="">aboutus.css</a></li>
          </ul>
        </li>
        <li>
          <span>Contact Us</span>
          <ul>
            <li><a href="/ContactUs">contactus.js</a></li>
            <li><a href="">contactus.css</a></li>
          </ul>
        </li>
        <li>
          <span>Sitemap</span>
          <ul>
            <li><a href="/SiteMap">sitemap.js</a></li>
            <li><a href="">sitemap.css</a></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sitemap;
