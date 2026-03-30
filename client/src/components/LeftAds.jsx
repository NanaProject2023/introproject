import { Link } from "react-router-dom"
import "./LeftAds.css"

export default function LeftAds() {
  return (
    <div className="left-ads">
      <video autoPlay muted loop playsInline>
        <source src={`${import.meta.env.BASE_URL}assets/beat.mp4`} type="video/mp4" />
      </video>
      <Link to={"/contact"} className="ad---link"><h2 className="ad">ADVERTISE HERE </h2></Link>

      <video autoPlay muted loop playsInline>
        <source src={`${import.meta.env.BASE_URL}assets/diva.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}