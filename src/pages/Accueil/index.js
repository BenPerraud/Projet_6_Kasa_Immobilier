import imgsource from '../../assets/images/img-source.png'
import "./accueil.css"
import "./cards.css"
import Cards from "./Cards"



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

export default Accueil
