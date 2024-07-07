import { useState } from "react";
import fleche from "../../assets/fleche-collapse.svg";

import "./collapse.css";

export default function Collapse({ title, contenu = null, equipments = null }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="collapse">
      <section className="collapse-header" onClick={handleVisibility}>
        <h2>{title}</h2>
        <img
          className={isVisible ? "active" : ""}
          src={fleche}
          alt="fleche du collapse"
        />
      </section>

      {isVisible && contenu && (
        <div className="contenu_collaps">
          <p> {contenu} </p>
        </div>
      )}
      {isVisible && equipments && (
        <ul className="contenu_collaps">
          {equipments.map((equipment) => (
            <li key={equipment}>{equipment}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
