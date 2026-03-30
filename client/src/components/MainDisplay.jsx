import React, { useState, useEffect } from "react";
import "./MainDisplay.css";
import { BrowserRouter,Routes, Route } from "react-router-dom";


import { useLocation } from "react-router-dom";


import ItemCard from "./ItemCard";
import Jeans from "./Jeans";
import Boots from "./Boots";
import Glasses from "./Glasses";
import Makeup from "./Makeup";
import Contact from "./Contact";


export default function MainDisplay({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

const location = useLocation();  

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/products.json`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);



const filteredProducts = selectedCategory === "all"
  ? products
  : products.filter(
      product => product.category.toLowerCase() === selectedCategory
    );





  return (


<>
    <div className="page-wrapper">
      
<div
  className={`filter-container ${
    location.pathname === "/" ? "show" : "hide"
  }`}
>

        <label>Filter New selection by:</label>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="boots">Boots</option>
          <option value="glasses">Glasses</option>
          <option value="makeup">Makeup</option>
          <option value="jeans">Jeans</option>
        </select>
      </div>
  



    <div className="main-display">
       
      <Routes>

        {/* HOME */}
        <Route
  path="/"
  element={
    <>
      {filteredProducts.length > 0 ? (
        filteredProducts.map(item => (
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

        {/* MAKEUP */}
        <Route
          path="/makeup"
          element={<Makeup handleAddToCart={addToCart} />}
        />

        {/* BOOTS */}
        <Route
          path="/boots"
          element={<Boots handleAddToCart={addToCart} />}
        />

        {/* GLASSES */}
        <Route
          path="/glasses"
          element={<Glasses handleAddToCart={addToCart} />}
        />

       {/* CONTACT */}
       
        <Route
          path="/contact"
          element={<Contact handleAddToCart={addToCart} />}
        />

        {/* FALLBACK */}
        <Route path="*" element={<p>Page not found</p>} />

      </Routes>
       
    </div>
    </div>
    </>
  );
}