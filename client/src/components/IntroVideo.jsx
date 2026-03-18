
import React, { useEffect, useRef, useState } from "react";
import "./IntroVideo.css";


export default function IntroVideo({ onEnter }  ) { 
  const videoRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show button after 5 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    // Play video once (muted, no loop)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="intro-container">
      <video
        ref={videoRef}
        className="intro-video"
        src="/assets/intro.mp4" // place your video here
        muted
        playsInline
      />

      {showButton && (
        <button
          className="enter-button"
         
          onClick={onEnter} >
          Enter Euphoria Bazaar &gt; &gt; &gt;
        </button>
      )}
    </div>
  );
}

