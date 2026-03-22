
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LeftAds from "./components/LeftAds";
import MainDisplay from "./components/MainDisplay";
import IntroVideo from "./components/IntroVideo";
import Cart from "./components/Cart";
import "./App.css"; 
import Boots from "./components/Boots";


export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [active, setActive] = useState("HOME");
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false); 
  if (showIntro) {
    return <IntroVideo onEnter={() => setShowIntro(false)} />;
  }

  
  const addToCart = (item) => {
    setCart((prev) => {
      const updated = [...prev, item];
      console.log("Cart:", updated);
      return updated;
    });

  };

  const removeFromCart = (indexToRemove) => {
  setCart(prev => prev.filter((_, i) => i !== indexToRemove));
  };  

  return (
    <div className="app-container">
      
      <Navbar
        setActive={setActive}
        cartCount={cart.length}
        onCartClick={() => setShowCart(true)} 
        />

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
        />
      )}

      <div className="main-layout">
        <LeftAds />
        <MainDisplay active={active} addToCart={addToCart} />
       
        
      </div>

    </div>
  );
}