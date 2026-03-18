
import React from "react";
import { useState, useEffect } from "react";    
import "./MainDisplay.css";
import DisplayCarousel from "./DisplayCarousel";
import ItemCard from "./ItemCard";

export default function MainDisplay({ active }) {

const [products, setProducts] = useState([]);

useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/products.json`)
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);


  return (
    <div className="main-display">
     {products.map(item => (
        <ItemCard
          key={item.id}
          image={item.image_url}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
}