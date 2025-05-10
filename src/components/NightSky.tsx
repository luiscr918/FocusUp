
import "../styles/fondosMain.css";

export const NightSky = () => {
  const stars = Array.from({ length: 20 }, (_, i) => (
    <div key={i} className="shooting_star"></div>
  ));

  return <div className="night">{stars}</div>;
};

