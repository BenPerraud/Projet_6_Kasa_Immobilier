import housings from "./../../assets/datas/logements.json"
import { useNavigate, useParams } from "react-router-dom"
import EditHousingById from "./editHousingById"
import { useEffect, useState } from "react"

function Housing () {
    const params = useParams()
    const Navigate = useNavigate()
    const [housing, setHousing] = useState(null)
    
    useEffect(() => 
        {
            let current = housings.find((housing) => housing.id === params.id)

            if (current !== undefined) {
                setHousing(current)
            } else (
                Navigate("/Error")
            )

        },
        [Navigate, params.id]
    )

    return ( 
        <>
            {housing && 
                (<div>
                    <EditHousingById x={housing} y={params} />
                </div>) 
            }
        </>
    )
 }

export default Housing
