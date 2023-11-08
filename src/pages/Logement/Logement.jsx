import { useEffect, useState } from "react";
import { useParams } from "react-router";
import data from "../../data/logements.json";
import "./Logement.css";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import Tag from "../../components/Tag/Tag";
import Stars from "../../components/Stars/Stars";

export default function Logement() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getLogement = (data) => {
      const item = data.find((appart) => appart.id === id);
      setLogement(item);
    };
    getLogement(data);
  }, [id]);

  console.log(logement);

  if (logement === null) return <div>404</div>;

  const testClick = () => {
    console.log("v");
  };

  return (
    <section>
      <Carrousel pictures={logement.pictures} />
      {/* <img src= {logement.pictures.url}/>   
            <div className="apprt_img"> 
              
                <img src={logement.cover}/>
            </div> */}
      <div className="apprt_headr">
        <div className="apprt_title">
          <h1 onClick={testClick}> {logement.title}</h1>
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
