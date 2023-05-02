import housings from "./../../assets/datas/logements.json"
import { useParams } from "react-router-dom"
import EditHousingById from "./editHousingById"

function Housing () {
    const params = useParams()
    
    return (
        <div>
            {housings.map((housing) => EditHousingById(housing, params))}
        </div>
    )
}

export default Housing
