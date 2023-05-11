import "./slideShow.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons"
import {faChevronRight} from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import IndexUp from "./indexUp"
import IndexDown from "./indexDown"


function SlideShow ({z}) {
    const [count, setCount]= useState(0)
    
    const clickHandlerUp = () => {
        setCount(IndexUp(count, z))
    }

    const clickHandlerDown = () => {
        setCount(IndexDown(count, z))
    }

    function picturesIndex(z) {
        if (z.pictures.length > 1) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className="carrousel">
            <div className={picturesIndex(z) ? "index" : "hidden"}>
                <FontAwesomeIcon onClick={clickHandlerDown} className="carrousel-chevron" icon={faChevronLeft}></FontAwesomeIcon>
                <div className="index-count">{count+1}/{z.pictures.length}</div>
                <FontAwesomeIcon onClick={clickHandlerUp} className="carrousel-chevron" icon={faChevronRight}></FontAwesomeIcon>
            </div>
            <img className="carrousel-img" src={z.pictures[count]} alt="Carrousel des photos du logement"></img>
        </div>
    )
}

export default SlideShow