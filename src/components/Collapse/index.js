import "./collapse.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
import {faChevronUp} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"


function Collapse ({title, text}) {
    const [isOpen, setIsOpen] = useState(false) /*La valeur initiale du collapse est fausse*/
    
    function handleChange () {
        setIsOpen(!isOpen) /* On clique, on passe la valeur du Collpase à vrai*/
    }

    /* Si la valeur du Collapse est vraie, on change la classe CSS et on affiche */    
    return (
        <div className="collapse-container">
            <div className="collapse-title"> 
                <p className="collapse-title-element">{title}</p> 
                {isOpen ? (<FontAwesomeIcon onClick={() => handleChange()} icon={faChevronDown}></FontAwesomeIcon>) : (<FontAwesomeIcon onClick={() => handleChange()} icon={faChevronUp}></FontAwesomeIcon>) }
            </div>
            <div className={isOpen ? "open" : "closed"}>{text}</div>
        </div>
    )
}

export default Collapse