import imgsource from '../../assets/images/img-source.png'
import "./accueil.css"
import "./cards.css"
import housings from "../../assets/datas/logements.json"

function Cards () {
  return (
      <div className="accueil-grid-gallery">
          {housings.map((housing) => (  
              <div key={housing.id} className="cards-container" style={{backgroundImage: `url(${housing.cover})`, backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
                  <div className="cards-container-title">{housing.title}</div>
              </div>
          ))}
      </div>
  )
}

function Accueil() {
  return (
    <div className='accueil-grid'>  
      <div className='accueil-grid-img' style={{ backgroundImage: `url(${imgsource})`, backgroundPosition:"center center", backgroundSize:"cover"}}>
        <div className='accueil-grid-img-title-background'></div>
        <div className='accueil-grid-img-title'>Chez vous, partout et ailleurs</div>
      </div>
      <Cards />
    </div>
  )
}

export default Accueil;
