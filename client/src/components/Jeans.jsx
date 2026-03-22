import React, { useState } from "react";
import "./Jeans.css";

export default function Jeans({handleAddToCart}) {
  const images = 
  
  /*
  [
    "/assets/alls9.jpg",
    "/assets/alls2.jpg",
    "/assets/alls10.jpg",
    "/assets/alls4.jpg",
    "/assets/alls6.jpg",
    "/assets/alls7.jpg",
    "/assets/alls8.jpg",
    "/assets/alls14.jpg",
    "/assets/alls11.jpg",
    "/assets/alls12.jpg",
    "/assets/alls13.jpg",
    "/assets/alls14.jpg"
   
  ]
  */
[
  {
    "id": 1,
    "title": "Slim Fit Jeans",
    "price": 80,
    "image": "/assets/alls9.jpg"
  },
  {
    "id": 2,
    "title": "Skinny Black Jeans",
    "price": 85,
    "image": "/assets/alls2.jpg"
  },
  {
    "id": 3,
    "title": "Relaxed Fit Denim",
    "price": 90,
    "image": "/assets/alls10.jpg"
  },
  {
    "id": 4,
    "title": "Straight Leg Jeans",
    "price": 75,
    "image": "/assets/alls4.jpg"
  },
  {
    "id": 5,
    "title": "Distressed Ripped Jeans",
    "price": 88,
    "image": "/assets/alls14.jpg"
  },
  {
    "id": 6,
    "title": "Dark Wash Denim",
    "price": 92,
    "image": "/assets/alls6.jpg"
  },
  {
    "id": 7,
    "title": "Light Wash Jeans",
    "price": 95,
    "image": "/assets/alls7.jpg"
  },
  {
    "id": 8,
    "title": "Tapered Fit Jeans",
    "price": 78,
    "image": "/assets/alls8.jpg"
  },
  {
    "id": 9,
    "title": "Baggy Denim Pants",
    "price": 82,
    "image": "/assets/alls11.jpg"
  },
  {
    "id": 10,
    "title": "Stretch Fit Jeans",
    "price": 89,
    "image": "/assets/alls12.jpg"
  },
  {
    "id": 11,
    "title": "High Waist Denim",
    "price": 94,
    "image": "/assets/alls13.jpg"
  },
  {
    "id": 12,
    "title": "Vintage Blue Jeans",
    "price": 99,
    "image": "/assets/alls1.jpg"
  }
]
  ;

  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goRight = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="jeans-page">
    <div className="jeans-container">
      <button className="nav-btn left" onClick={goLeft}>
        ◀
      </button>

<img
  src={`${import.meta.env.BASE_URL}${images[currentIndex].image}`}
  
  alt={images[currentIndex].title}
  className="jeans-image"
/>

      <button className="nav-btn right" onClick={goRight}>
        ▶
      </button>

      <p className="jeans-price">${images[currentIndex].price}</p>
          

      <button className="add-cart-btn" onClick={()=>handleAddToCart(images[currentIndex])}>
        Add to Cart
      </button>


    </div>
    </div>

  );
}