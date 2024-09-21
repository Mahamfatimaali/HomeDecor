import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/furnirologo.png';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './header.css';
import article1 from './images/article1.jpg'; 
import article2 from './images/gifts-under-100.webp'; 
import article3 from './images/article3.jpeg'; 
import article4 from './images/article4.jpg'; 

const Header = ({ onSearch,cart, wishlist }) => {
  const handleSearch = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      onSearch(e.target.value);
    }
  };
  return (
    <header>
      <div className="header-container">
        <div className="navbar">
          <div className="logo-1">
          <Link to="/" ><img src={logo} alt="logo" className='logo'/></Link>
            <p>Home Styler</p>
          </div>
          <div className="navitems">
            <nav>
              <ul>
              <li><Link to="/Home">Home</Link></li>
              <li className="gift">
                <Link to="/DesignStyles">Design Styles</Link>
                </li>
                <li><Link to="/Furniture">Products</Link></li>
                <li><Link to="/DesignerGallery"> Gallery</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
                <li><Link to="/Feedback">Feedback</Link></li>
                <li><Link to="/AboutUs">About Us</Link></li>
                <li><Link to="/SiteMap">Site Map</Link></li>
                
              </ul>
            </nav>
          </div>
          <div className="main-icon-container">
          <div className="icon-container">
  <i className="fas fa-heart"></i>
  {wishlist.length > 0 && <span className="icon-badge">{wishlist.length}</span>}
</div>

<div className="icon-container">
  <i className="fa-solid fa-bell"></i>
</div>
<div className="icon-container">
  <i className="fas fa-shopping-cart"></i>
  {cart.length > 0 && <span className="icon-badge">{cart.length}</span>}
</div>
</div>
          
        </div>
        {/* Search Bar Section */}
        <div className="search-bar">
        <input
          type="text"
          placeholder="Search for products..."
          onKeyDown={handleSearch} // Handle Enter key
          onChange={(e) => onSearch(e.target.value)} // Update search on typing
        />
          <button type="submit" onClick={handleSearch}><i className="fa fa-search"></i></button>
        </div>
      </div>
    </header>
  );
};

export default Header;