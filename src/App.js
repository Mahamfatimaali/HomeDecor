import React from 'react';
// import { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Header from './component/header';
import Footer from "./component/footer";
import Home from "./component/Home/home";
import DesignStyles from "./component/Design Style/designstyle";
import ContactUs from "./component/Contact Us/contactus";
import Feedback from "./component/Feedback/feedback";
import AboutUs from "./component/About Us/aboutus";
import Sitemap from "./component/Sitemap/sitemap";
import { useState } from 'react'; 
import CategoryPage from './component/Products/FunitureCatogaries';
import DesignersGallery from './component/Designer Gallery/DesignersGallery';
function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleSearch = (query) => {
  
    setSearchQuery(query.toLowerCase()); 
  };
  return (
    
    <Router>
    <Header onSearch={handleSearch} cart={cart} wishlist={wishlist}/>
    <Routes>
    <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/DesignStyles" element={<DesignStyles />} />
      <Route path="/DesignerGallery" element={<DesignersGallery />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Feedback" element={<Feedback />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/SiteMap" element={<Sitemap />} />
      <Route path="/Furniture" element={<CategoryPage searchQuery={searchQuery} onCartUpdate={setCart} onWishlistUpdate={setWishlist}/>} />

    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;