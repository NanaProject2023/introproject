
import React, { useEffect, useState } from "react";
import "./DisplayCarousel.css";

const images = [
  "/assets/alls3.jpg",
  "/assets/boots7.jpg",
  "/assets/glasses4.jpg",
  "/assets/jewl5.jpg"
];

export default function DisplayCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <img
        src={images[index]}
        alt="carousel"
        className="carousel-image"
      />
    </div>
  );
}



