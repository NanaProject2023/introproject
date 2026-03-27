import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">
        <p>© 2026 Euphoria Bazaar</p>

        <div className="social-icons">

          <button className="icon-btn">
            <FaFacebookF />
          </button>

          <button className="icon-btn">
            <FaInstagram />
          </button>

          <button className="icon-btn">
            <FaLinkedinIn />
          </button>

          <button className="icon-btn">
            <FaXTwitter />
          </button>

        </div>
      </div>

    </footer>
  );
}