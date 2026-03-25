import "./LeftAds.css"

export default function LeftAds() {
  return (
    <div className="left-ads">
      <video autoPlay muted loop playsInline>
        <source src={`${import.meta.env.BASE_URL}assets/beat.mp4`} type="video/mp4" />
      </video>
      <h2 className="ad">ADVERTISE HERE </h2>

      <video autoPlay muted loop playsInline>
        <source src={`${import.meta.env.BASE_URL}assets/diva.mp4`} type="video/mp4" />
      </video>
    </div>
  );
}