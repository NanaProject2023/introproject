import React, { useEffect, useState } from "react";
import "./Glasses.css";

export default function Glasses({ handleAddToCart }) {
  const [glasses, setGlasses] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // fetch JSON
  useEffect(() => {

    fetch("/introproject/assets/glasses.json")
      .then((res) => res.json())
      .then((data) => setGlasses(data));
  }, []);

  const goLeft = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? glasses.length - 1 : prev - 1
    );
  };

  const goRight = () => {
    setCurrentIndex((prev) =>
      prev === glasses.length - 1 ? 0 : prev + 1
    );
  };

  if (glasses.length === 0) return <p>Loading...</p>;

  const currentItem = glasses[currentIndex];

  return (
    <div className="glasses-pagee">
      <div className="glasses-containere">
        
        <button className="nav-btn lefte" onClick={goLeft}>
          ◀
        </button>


<div className="carousele">
  <div
    className="carousel-tracke"
    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
  >
    {glasses.map((item) => (
      <img
        key={item.id}
        src={`${import.meta.env.BASE_URL}${item.image}`}
        alt={item.title}
        className="glasses-imagee"
      />
    ))}
  </div>
</div>




        <button className="nav-btn righte" onClick={goRight}>
          ▶
        </button>

        <h3 className="glasses-titlee">{currentItem.title}</h3>
        <p className="glasses-pricee">${currentItem.price}</p>

        <button
          className="add-cart-btne"
          onClick={() => handleAddToCart(currentItem)}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}