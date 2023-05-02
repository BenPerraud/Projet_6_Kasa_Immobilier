import housings from "../../assets/datas/logements.json"
import {Link} from "react-router-dom"

function Cards () {
    return (
        <div className="accueil-grid-gallery">
            {housings.map((housing) => (  
                <Link to={housing.id} key={housing.id} className="cards-container" style={{backgroundImage: `url(${housing.cover})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                    <div className="cards-container-title">{housing.title}</div>
                </Link>
            ))}
        </div>
    )
  }

  export default Cards