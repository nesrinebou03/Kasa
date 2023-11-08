import Collapse from "../../components/Collapse/Collapse";

import "./About.css";
import image_ab from "../../assets/img_about.png";
export default function About() {
  return (
    <div className="nav_about">
      <img src={image_ab} />
      <div className="collaps_about">
        <Collapse
          title={"Fiabilité"}
          contenu="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes"
        />
        <Collapse
          title={"Respect"}
          contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title={"Service"}
          contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title={"Sécurité"}
          contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l hôte qu au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}
