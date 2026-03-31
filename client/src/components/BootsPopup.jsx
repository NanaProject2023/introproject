import { useEffect, useState } from "react";
import "./BootsPopup.css";

export default function BootsPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  // Show popup after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem("bootsPopupData", JSON.stringify(formData));

    alert("Saved to localStorage!");

    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="boots-overlay">
      <div className="boots-popup">
        
        {/* Close X */}
        <button className="boots-close" onClick={() => setIsVisible(false)}>
          ✕
        </button>

        <h2>Congrats !! 40% OFF Coupon waiting for you</h2>

        <form onSubmit={handleSubmit} className="boots-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="boots-input"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="boots-input"
            onChange={handleChange}
            required
          />

          <div className="boots-buttons">
            <button
              type="button"
              className="boots-btn dismiss"
              onClick={() => setIsVisible(false)}
            >
              Dismiss
            </button>

            <button type="submit" className="boots-btn submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}