import React, { useState } from 'react';
import './designStyles.css';

// Sample data for designs
const designData = [
  {
    category: "Living Room",
    designs: [
      {
        trend: "Contemporary",
        description: "A modern living room with a minimalistic and sleek design.",
        image: require('../images/background2.jpg'),
        products: [
          { name: "Sofa", price: 300 },
          { name: "Coffee Table", price: 150 },
          { name: "TV Stand", price: 200 },
        ],
      },
      {
        trend: "Elegant Look",
        description: "A luxurious living room with an elegant design.",
        image: require('../images/background3.jpg'),
        products: [
          { name: "Luxury Sofa", price: 800 },
          { name: "Glass Coffee Table", price: 350 },
          { name: "Modern Lamp", price: 180 },
        ],
      },
      {
        trend: "Bohemian",
        description: "A colorful, relaxed living room with eclectic furniture and decor.",
        image: require('../images/background4.jpg'),
        products: [
          { name: "Wicker Chair", price: 200 },
          { name: "Boho Rug", price: 250 },
          { name: "Hanging Plants", price: 50 },
        ],
      },
      {
        trend: "Mid-Century Modern",
        description: "A living room inspired by mid-20th-century design with sleek lines.",
        image: require('../images/background5.jpg'),
        products: [
          { name: "Mid-Century Sofa", price: 700 },
          { name: "Wooden Coffee Table", price: 300 },
          { name: "Retro Lamp", price: 100 },
        ],
      },
      {
        trend: "Industrial",
        description: "A rugged and raw living room with exposed elements and metal accents.",
        image: require('../images/background8.jpg'),
        products: [
          { name: "Industrial Sofa", price: 600 },
          { name: "Metal Coffee Table", price: 250 },
          { name: "Exposed Pipe Lamp", price: 120 },
        ],
      },
    ],
  },
  {
    category: "Kitchen",
    designs: [
      {
        trend: "Modern",
        description: "A sleek kitchen setup with modern appliances and cabinetry.",
        image: require('../images/kitchen1.jpg'),
        products: [
          { name: "Cabinet", price: 500 },
          { name: "Dining Table", price: 400 },
          { name: "Kitchen Island", price: 600 },
        ],
      },
      {
        trend: "Rustic",
        description: "A rustic kitchen with a cozy, farmhouse style.",
        image: require('../images/kitchen2.jpg'),
        products: [
          { name: "Wooden Cabinet", price: 450 },
          { name: "Farmhouse Sink", price: 300 },
          { name: "Rustic Dining Table", price: 500 },
        ],
      },
      {
        trend: "Industrial",
        description: "A kitchen with exposed brick, metal accents, and a rugged look.",
        image: require('../images/kitchen3.jpg'),
        products: [
          { name: "Metal Bar Stools", price: 150 },
          { name: "Concrete Countertop", price: 1000 },
          { name: "Industrial Shelving", price: 200 },
        ],
      },
      {
        trend: "Coastal",
        description: "A bright and airy kitchen inspired by seaside living.",
        image: require('../images/kitchen4.jpg'),
        products: [
          { name: "White Cabinets", price: 550 },
          { name: "Driftwood Dining Table", price: 650 },
          { name: "Nautical Pendant Lights", price: 300 },
        ],
      },
      {
        trend: "Vintage",
        description: "A retro kitchen design with nostalgic charm and classic fixtures.",
        image: require('../images/kitchen5.jpg'),
        products: [
          { name: "Vintage Stove", price: 700 },
          { name: "Retro Refrigerator", price: 1200 },
          { name: "Checkerboard Flooring", price: 400 },
        ],
      },
    ],
  },
  {
    category: "Lighting",
    designs: [
      {
        trend: "Chandeliers",
        description: "Elegant lighting fixtures that add a touch of glamour to any space.",
        image: require('../images/lightning.jpg'),
        products: [
          { name: "Crystal Chandelier", price: 500 },
          { name: "Modern Chandelier", price: 350 },
        ],
      },
      {
        trend: "Pendant Lights",
        description: "Stylish pendant lights for focused and ambient lighting.",
        image:  require('../images/lightning1.jpeg'),
        products: [
          { name: "Industrial Pendant Light", price: 200 },
          { name: "Farmhouse Pendant", price: 150 },
        ],
      },
      {
        trend: "Floor Lamps",
        description: "Versatile floor lamps that can enhance any room's lighting.",
        image:  require('../images/lightning2.jpeg'),
        products: [
          { name: "Arc Floor Lamp", price: 250 },
          { name: "Tripod Floor Lamp", price: 180 },
        ],
      },
      {
        trend: "Wall Sconces",
        description: "Functional and decorative wall sconces for added ambiance.",
        image:  require('../images/lightning3.jpeg'),
        products: [
          { name: "Vintage Wall Sconce", price: 120 },
          { name: "Modern Wall Sconce", price: 90 },
        ],
      },
    ],
  },
  {
    category: "Decor",
    designs: [
      {
        trend: "Minimalist",
        description: "Sleek and uncluttered decor that emphasizes simplicity.",
        image:  require('../images/decor.png'),
        products: [
          { name: "Minimalist Vase", price: 80 },
          { name: "Abstract Art", price: 150 },
        ],
      },
      {
        trend: "Bohemian",
        description: "Eclectic decor with vibrant colors and unique patterns.",
        image: require('../images/decor1.jpeg'),
        products: [
          { name: "Boho Throw Pillows", price: 60 },
          { name: "Macramé Wall Hanging", price: 100 },
        ],
      },
      {
        trend: "Rustic",
        description: "Warm and earthy decor with a cozy, farmhouse feel.",
        image: require('../images/decor2.webp'),
        products: [
          { name: "Wooden Picture Frames", price: 50 },
          { name: "Rustic Candle Holders", price: 30 },
        ],
      },
      {
        trend: "Vintage",
        description: "Classic decor items that evoke nostalgia and charm.",
        image: require('../images/decor3.jpeg'),
        products: [
          { name: "Antique Mirror", price: 200 },
          { name: "Vintage Clock", price: 120 },
        ],
      },
      {
        trend: "Contemporary",
        description: "Modern decor with clean lines and bold statements.",
        image: require('../images/5.webp'),
        products: [
          { name: "Contemporary Artwork", price: 250 },
          { name: "Sculptural Vases", price: 130 },
        ],
      },
    ],
  },
  {
    category: "Bathroom",
    designs: [
      {
        trend: "Spa",
        description: "A luxurious bathroom designed for relaxation and rejuvenation.",
        image: require('../images/bathroom.jpg'),
        products: [
          { name: "Soaking Tub", price: 800 },
          { name: "Rain Showerhead", price: 200 },
        ],
      },
      {
        trend: "Modern",
        description: "A sleek bathroom with modern fixtures and finishes.",
        image: require('../images/bathroom1.png'),
        products: [
          { name: "Floating Vanity", price: 600 },
          { name: "Wall-Mounted Toilet", price: 350 },
        ],
      },
      {
        trend: "Rustic",
        description: "A cozy bathroom with rustic charm and natural materials.",
        image: require('../images/bathroom2.jpg'),
        products: [
          { name: "Wooden Sink Cabinet", price: 450 },
          { name: "Barn Door Shower", price: 400 },
        ],
      },
      {
        trend: "Coastal",
        description: "A bright bathroom inspired by seaside living.",
        image: require('../images/bathroom3.jpg'),
        products: [
          { name: "Seafoam Green Tiles", price: 100 },
          { name: "Coastal Shower Curtain", price: 40 },
        ],
      },
      {
        trend: "Vintage",
        description: "A bathroom with classic fixtures and nostalgic design.",
        image: require('../images/bathroom.jpg'),
        products: [
          { name: "Clawfoot Tub", price: 700 },
          { name: "Retro Sink", price: 350 },
        ],
      },
    ],
  },
];

const DesignStyles = () => {
  // Set default selected category and design
  const defaultCategory = "Living Room";
  const defaultDesign = designData
    .find((category) => category.category === defaultCategory)
    .designs.find((design) => design.trend === "Contemporary");

  const [selectedCategory, setSelectedCategory] = useState(defaultCategory);
  const [selectedDesign, setSelectedDesign] = useState(defaultDesign);

  // Handler for selecting category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedDesign(null); // Reset the design selection when a new category is selected
  };

  // Handler for selecting design within a category
  const handleDesignClick = (design) => {
    setSelectedDesign(design);
  };

  return (
    <div className="design-styles-container">
      <h2  className='heading1'>Select Design Style</h2>
      
      {/* Category List */}
      <div className="category-list">
        {designData.map((category, index) => (
          <button 
            key={index} 
            onClick={() => handleCategoryClick(category.category)}
            className={selectedCategory === category.category ? 'active' : ''}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Design Styles in the Selected Category */}
      {selectedCategory && (
        <div className="design-list">
          <h3>Select a Design Trend:</h3>
          {designData
            .find((category) => category.category === selectedCategory)
            .designs.map((design, index) => (
              <button 
                key={index} 
                onClick={() => handleDesignClick(design)}
                className={selectedDesign === design ? 'active' : ''}
              >
                {design.trend}
              </button>
          ))}
        </div>
      )}

      {/* Design Details */}
      {selectedDesign && (
        <div className="design-details">
          <h3>{selectedCategory} - {selectedDesign.trend}</h3>
          <img src={selectedDesign.image} alt={selectedCategory} className="design-image" />
          <p>{selectedDesign.description}</p>

          {/* Products Used */}
          <h4>Products Used:</h4>
          <ul>
            {selectedDesign.products.map((product, idx) => (
              <li key={idx}>{product.name} - ${product.price}</li>
            ))}
          </ul>

          {/* Total Cost */}
          <p className="total-cost">
            Total Cost: $
            {selectedDesign.products.reduce((acc, product) => acc + product.price, 0)}
          </p>
        </div>
      )}
    </div>
  );
};

export default DesignStyles;
