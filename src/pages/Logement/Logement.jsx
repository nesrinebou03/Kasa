import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import data from "../../data/logements.json";
import "./Logement.css";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Stars from "../../components/Stars/Stars";
//parametre
export default function Logement() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
//chemin
  useEffect(() => {
    const getLogement = (data) => {
      const item = data.find((appart) => appart.id === id);
      if (!item) {
        return navigate("/Error");
      }
      setLogement(item);
    }; 

    getLogement(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(logement);

  if (logement === null) return <div>404</div>;

  return (
    <section>
      <Carrousel pictures={logement.pictures} />
    
      <div className="apprt_headr">
        <div className="apprt_title">
          <h1> {logement.title}</h1>
          <h2 className="apprt_soutitle"> {logement.location}</h2>
          <div className="tags-container">
            {logement.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className="apprt_host">
          <div className="host_name">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} />
          </div>
          <div className="host_rating">
            <Stars rating={logement.rating} />
          </div>
        </div>
      </div>

      <div className="apprt_elem">
        <Collapse title={"Description"} contenu={logement.description} />

        <Collapse title={"Equipements"} equipments={logement.equipments} />
      </div>
    </section>
  );
}
