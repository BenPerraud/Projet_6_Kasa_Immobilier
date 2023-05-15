import housings from "./../../assets/datas/logements.json"
import { useNavigate, useParams } from "react-router-dom"
import EditHousingById from "./editHousingById"
import { useEffect, useState } from "react"

function Housing () {
    const params = useParams() /* On récupère l'ID en cours qui est dans l'URL généré par le NavLink de Cards*/ 
    const Navigate = useNavigate()
    const [housing, setHousing] = useState(null)
    
    useEffect(() => /* On affiche la fonction EditHousingById lorsque l'état du state de Housing n'est plus nul (valeur initiale) */
        {
            let current = housings.find((housing) => housing.id === params.id) /* On récupère les datas du logement en cours en comparant l'ID de l'URL et la BD*/
            if (current !== undefined) {
                setHousing(current) /* La valeur de housing passe de nul à current si l'ID demandé est trouvé*/
            } else (
                Navigate("/Error") /* Si pas de modification du current, et donc erreur dans l'ID demandé, on renvoi sur la page Error*/
            )

        },
        [Navigate, params.id]
    )

    return ( 
        <>
            {housing && /* Si housing est vrai et donc défini, on renvoi une div pour affichage*/
                (<div>
                    <EditHousingById x={housing} />
                </div>) 
            }
        </>
    )
 }

export default Housing
