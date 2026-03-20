import React, { useState } from "react";
import "./Jeans.css";

export default function Jeans({handleAddToCart}) {
  const images = [
    "/assets/alls9.jpg",
    "/assets/alls2.jpg",
    "/assets/alls10.jpg",
    "/assets/alls4.jpg",
    "/assets/alls6.jpg",
    "/assets/alls7.jpg",
    "/assets/alls8.jpg",
    "/assets/alls2.jpg",
    "/assets/alls11.jpg",
    "/assets/alls12.jpg",
    "/assets/alls13.jpg",
    "/assets/alls14.jpg"
   
  ];

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
  src={`${import.meta.env.BASE_URL}${images[currentIndex]}`}
  alt="jeans"
  className="jeans-image"
/>

      <button className="nav-btn right" onClick={goRight}>
        ▶
      </button>

          <button className="add-cart-btn" onClick={handleAddToCart}>
        Add to Cart
      </button>


    </div>
    </div>

  );
}