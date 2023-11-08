import { useState } from "react";
import flecheGauche from "../../assets/flecheGauche.svg";
import flecheDroite from "../../assets/flecheDroite.svg";

import "./carrousel.css";

export default function Carrousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    if (index === 0) {
      return setIndex(pictures.length - 1);
    }
    setIndex(index - 1);
  };

  const handleRightClick = () => {
    if (index === pictures.length - 1) {
      return setIndex(0);
    }
    setIndex(index + 1);
  };

  return (
    <div className="carrousel">
      <img
        className="fleche-gauche"
        src={flecheGauche}
        alt="fleche gauche"
        onClick={handleLeftClick}
      />
      <img
        className="main-img"
        src={pictures[index]}
        alt="image du carrousel"
      />
      <img
        className="fleche-droite"
        src={flecheDroite}
        alt="fleche droite"
        onClick={handleRightClick}
      />
      <span>
        {index + 1} / {pictures.length}
      </span>
    </div>
  );
}
