import React, { useState } from "react";
import "./ItemCard.css";

export default function ItemCard({ image, title, price, addToCart}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>



      


    
      <div className="item-card" onClick={() => setIsOpen(true)}>
        
        <div className="image-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}${image}`}
            alt={title}
            className="item-image"
          />
        </div>

        <div className="item-info">
          <h3 className="item-title">{title}</h3>
          <p className="item-price">${price}</p>
        </div>
        
        
        <button className="add-btn" onClick={(e) => {
          e.stopPropagation();
          addToCart({ image, title, price });
          }}>
              Add
        </button>



      </div>




    
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            <img
              src={`${import.meta.env.BASE_URL}${image}`}
              alt={title}
              className="modal-image"
            />

            <h2>{title}</h2>
            <p>${price}</p>
          </div>
        </div>
      )}
    </>
  );
}