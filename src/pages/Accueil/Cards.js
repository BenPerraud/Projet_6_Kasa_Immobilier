import housings from "../../assets/datas/logements.json"
import {NavLink} from "react-router-dom"

function Cards () {
    return (
        <div className="accueil-grid-gallery">
            {housings.map((housing) => (
                /* Au clic, on renvoie vers une page avec pour URL l'ID*/  
                <NavLink to={housing.id} key={housing.id} className="cards-container" style={{backgroundImage: `url(${housing.cover})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div className="cards-container-title">{housing.title}</div>
                </NavLink>
            ))}
        </div>
    )
  }

  export default Cards