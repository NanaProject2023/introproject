import React, { useEffect, useState } from "react";
import "./Makeup.css";

function Makeup({handleAddToCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/introproject/assets/mups.json")
    
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error loading makeup:", err));
  }, []);

  return (

    <div className="makeup-wrapper">
    <div className="container makeup-container">
      <div className="row">
        {products.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <div className="card makeup-card">
              <img
                  src={`${import.meta.env.BASE_URL}${item.image}`}
                className="card-img-top makeup-img"
                alt={item.title}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text price">${item.price}</p>
                <button className="add-btnee"
                
                  onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default Makeup;