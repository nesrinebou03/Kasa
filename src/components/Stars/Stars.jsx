import "./stars.css";

import EtoileRouge from "../../assets/etoile-rouge.svg";
import EtoileGrise from "../../assets/etoile-grise.svg";

export default function Stars({ rating }) {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="stars">
      {array.map((number) => {
        if (number <= rating) {
          return <img key={number} src={EtoileRouge} alt="etoile rouge" />;
        }
        return <img key={number} src={EtoileGrise} alt="etoile grise" />;
      })}
    </div>
  );
}
