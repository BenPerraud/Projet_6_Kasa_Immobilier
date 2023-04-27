import "./propos.css"
import imgpropos from "./../../assets/images/img-propos.png"
import Collapse from "./../../components/Collapse"



function Propos () {
    return (
        <div className="propos-grid"> 
            <div className="propos-img" style={{ backgroundImage: `url(${imgpropos})`}}>
                <div className="propos-img-background"></div>
            </div>
            <Collapse />  
        </div>    
    )
}

export default Propos