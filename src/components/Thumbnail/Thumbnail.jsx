/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./thumbnail.css";

export default function Thumbnail({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`}>
      <article className="thumbnail">
        <img src={logement.cover} alt={logement.title} />
        <p>{logement.title}</p>
      </article>
    </Link>
  );
}
