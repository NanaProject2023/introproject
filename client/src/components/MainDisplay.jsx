import React, { useState, useEffect } from "react";
import "./MainDisplay.css";
import { Routes, Route } from "react-router-dom";

import ItemCard from "./ItemCard";
import Jeans from "./Jeans";
import Boots from "./Boots";

export default function MainDisplay({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/products.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="main-display">
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              {products.length > 0 ? (
                products.map(item => (
                  <ItemCard
                    key={item.id}
                    image={item.image_url}
                    title={item.title}
                    price={item.price}
                    addToCart={addToCart}
                  />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </>
          }
        />

        {/* JEANS */}
        <Route
          path="/jeans"
          element={<Jeans handleAddToCart={addToCart} />}
        />

                {/* BOOTS */}
        <Route
          path="/boots"
          element={<Boots handleAddToCart={addToCart} />}
        />

        {/* FALLBACK */}
        <Route path="*" element={<p>Page not found</p>} />

      </Routes>
    </div>
  );
}