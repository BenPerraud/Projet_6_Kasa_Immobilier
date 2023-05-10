import "./propos.css"
import imgpropos from "./../../assets/images/img-propos.png"
import Collapse from "./../../components/Collapse"
import datas from "./../../assets/datas/propos.json"

function Propos () {
    return (
        <div className="propos-grid"> 
            <div className="propos-img" style={{ backgroundImage: `url(${imgpropos})`}}>
                <div className="propos-img-background"></div>
            </div>
            <div className="propos-collapse">
                {datas.map((data) => 
                    <div key={data.id}>
                        <Collapse title={data.id} text={data.description} />
                    </div>
                )}
            </div>  
        </div>    
    )
}

export default Propos