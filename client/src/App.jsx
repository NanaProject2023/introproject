import React, { useState } from "react";
import Navbar from "./components/Navbar";
import LeftAds from "./components/LeftAds";
import MainDisplay from "./components/MainDisplay";
import IntroVideo from "./components/IntroVideo";
import "./App.css";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [active, setActive] = useState("Home"); // ✅ move here

  if (showIntro) {
    return <IntroVideo onEnter={() => setShowIntro(false)} />;
  }

  return (
    <div className="app-container">
      <Navbar setActive={setActive} />
      

      <div className="main-layout">
        <LeftAds />
        <MainDisplay active={active} />
      </div>
    </div>
  );
}



