import "./collapse.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronDown} from "@fortawesome/free-solid-svg-icons"
import {faChevronUp} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import datas from "./../../assets/datas/propos.json"


function Collapse (id, description) {
    const [isOpen, setIsOpen] = useState(false)
    
    function handleChange () {
        setIsOpen(!isOpen)
    }
        
    return (
        <div>
            {datas.map((data) => (
                <div className="collapse">
                    <div key={data.id} className="collapse-container">
                        <p>{data.id}</p>
                        {isOpen ? (<FontAwesomeIcon onClick={() => handleChange()} icon={faChevronDown}></FontAwesomeIcon>) : (<FontAwesomeIcon onClick={() => handleChange()} icon={faChevronUp}></FontAwesomeIcon>) }
                    </div>
                    <div className={isOpen ? "open" : "closed"}>{data.description}</div>
                </div>
            ))}
        </div>
    )
}

export default Collapse