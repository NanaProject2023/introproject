import React, { useEffect, useState } from "react";
import "./Boots.css";

export default function Boots({ handleAddToCart}) {
  const [boots, setBoots] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch JSON from public/assets
  useEffect(() => {
    fetch("/introproject/assets/myboots.json")
      .then((res) => res.json())
      .then((data) => setBoots(data))
      .catch((err) => console.error("Error loading boots:", err));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % boots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? boots.length - 1 : prev - 1
    );
  };

  if (boots.length === 0) return <p>Loading...</p>;

  const currentBoot = boots[currentIndex];

  return (
    <div className="boots-page">
      <div className="boots-container">
        <button className="nav-btn left" onClick={prevSlide}>
          ◀
        </button>

        <div className="boots-card">
          <img
            src={`${import.meta.env.BASE_URL}${boots[currentIndex].image}`}
            alt="boot"
            className="boots-image"
          />
          <h3 className="boots-title">{currentBoot.title}</h3>
          <p className="boots-price">${currentBoot.price}</p>
          
          <button
            className="aadd-btn"
            onClick={() => handleAddToCart(currentBoot)}
          >
            Add To Cart
          </button>
          
        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          ▶
        </button>
      </div>
    </div>
  );
}