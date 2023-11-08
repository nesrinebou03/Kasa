import Thumbnail from "../../components/Thumbnail/Thumbnail";
import data from "../../data/logements.json";

import "./home.css";
import image from "../../assets/IMG.png";
export default function Home() {
  console.log(data);
  return (
    <section>
      <div className="nav">
        <img src={image} />
        <h2>Chez vous, partout et ailleurs</h2>
      </div>

      <article className="thumbnail-container">
        {data.map((logement) => (
          <Thumbnail key={logement.id} logement={logement} />
        ))}
      </article>
    </section>
  );
}
