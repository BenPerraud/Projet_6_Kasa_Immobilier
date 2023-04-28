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

  export default Cards