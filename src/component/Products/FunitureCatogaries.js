import React, { useState, useEffect } from 'react';
import './furnitureCatogaries.css';

// FurnitureCard Component
const FurnitureCard = ({ furniture, onAddToCart, onAddToWishlist }) => {
  const { image, name, description, price } = furniture;

  return (
    <div className="furniture-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      
      <div className="card-icons">
        <button className="card-icon add-to-cart-btn" onClick={() => onAddToCart(furniture)}>
          <i className="fas fa-shopping-cart"></i> Add to Cart
        </button>
        <button className="card-icon wishlist-btn" onClick={() => onAddToWishlist(furniture)}>
          <i className="fas fa-heart"></i> Wishlist
        </button>
      </div>
    </div>
  );
};

// CategoryPage Component
const CategoryPage = ({ searchQuery, onCartUpdate, onWishlistUpdate }) => {
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('PriceLowToHigh');
  const [categories, setCategories] = useState({});

  // State for cart and wishlist
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Fetch data from JSON file
  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Handle filter change
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Handle sort order change
  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Add to cart
  const handleAddToCart = (furniture) => {
    setCart([...cart, furniture]);
    onCartUpdate([...cart, furniture]); // Notify parent if needed
  };

  // Add to wishlist
  const handleAddToWishlist = (furniture) => {
    setWishlist([...wishlist, furniture]);
    onWishlistUpdate([...wishlist, furniture]); // Notify parent if needed
  };

  // Filter and sort the products
  const filteredCategories = Object.keys(categories).reduce((acc, category) => {
    const filteredProducts = categories[category]
      .filter(
        (furniture) =>
          furniture.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          furniture.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((furniture) => filter === 'All' || furniture.name.toLowerCase().includes(filter.toLowerCase()));

    // Sort the products
    const sortedProducts = filteredProducts.sort((a, b) => {
      if (sortOrder === 'PriceLowToHigh') {
        return a.price - b.price;
      } else if (sortOrder === 'PriceHighToLow') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });

    if (sortedProducts.length > 0) {
      acc[category] = sortedProducts;
    }
    return acc;
  }, {});

  return (
    <div className="category-page">
      <div className="filters">
        <label htmlFor="filter">Filter by:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          {/* Add more filter options based on your data */}
        </select>

        <label htmlFor="sortOrder">Sort by:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="PriceLowToHigh">Price: Low to High</option>
          <option value="PriceHighToLow">Price: High to Low</option>
        </select>
      </div>

      {Object.keys(filteredCategories).length === 0 ? (
        <p>No products found.</p>
      ) : (
        Object.keys(filteredCategories).map((category) => (
          <div key={category} className="category">
            <h2>{category.replace(/([A-Z])/g, ' $1')}</h2> {/* Add spaces to category names */}
            <div className="plant-grid">
              {filteredCategories[category].map((furniture, index) => (
                <FurnitureCard 
                  key={index} 
                  furniture={furniture} 
                  onAddToCart={handleAddToCart} 
                  onAddToWishlist={handleAddToWishlist} 
                />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryPage;
