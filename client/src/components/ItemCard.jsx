
import React from "react";
import "./ItemCard.css";

export default function ItemCard({ image, title, price }) {
  return (
    <div className="wraper">
    <div className="item-card">
      <img src={`${import.meta.env.BASE_URL}${image}`} alt={title} />
      <div className="item-info">
        <h3 className="item-title">{title}</h3>
        <p className="item-price">${price}</p>
      </div>
    </div>
    </div>
  );
}


