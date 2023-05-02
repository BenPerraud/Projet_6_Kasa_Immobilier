import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"
import "./housing.css"

function GoodRating ({scaleRating}) {
    const array = []
    for (let i=0; i<(scaleRating); i++) {
        array.push("Rating")
    }
    
    return (
        <div className="profil-rating-star">
            {array.map((rate, index) => 
                <FontAwesomeIcon className="profil-rating-star-element" key={`${rate}-${index}`} icon={faStar} style={{color: "#FF6060",}}/>
            )}
        </div>
    )
}

export default GoodRating