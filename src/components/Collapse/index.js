import "./collapse.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
import {faChevronUp} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"



function Collapse (x) {
    const [isOpen, setIsOpen] = useState(false)
    
    function handleChange () {
        setIsOpen(!isOpen)
    }
        
    return (
        <div>
            <div>
                <div key={x.id} className="collapse-container">
                    <p>{x.id}</p>
                    {isOpen ? (<FontAwesomeIcon onClick={() => handleChange()} icon={faChevronDown}></FontAwesomeIcon>) : (<FontAwesomeIcon onClick={() => handleChange()} icon={faChevronUp}></FontAwesomeIcon>) }
                </div>
                <div className={isOpen ? "open" : "closed"}>{x.description}</div>
            </div>
        </div>
    )
}

export default Collapse