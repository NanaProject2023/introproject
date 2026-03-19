
import React, { useEffect, useRef, useState } from "react";
import "./IntroVideo.css";


export default function IntroVideo({ onEnter }  ) { 
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);


    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-container">
<video
  ref={videoRef}
  className="intro-video"
  autoPlay
  muted
  playsInline
  preload="auto"
>
  <source
    src={`${import.meta.env.BASE_URL}assets/intro.mp4`}
    type="video/mp4"
  />
</video>

      {showButton && (
        <button
          className="enter-button"
         
          onClick={onEnter} >
          ENTER EUPHORIA BAZAAR &gt; &gt; &gt;
        </button>
      )}
    </div>
  );
}

