import "./housing.css"
import GoodRating from "./goodRating"
import BadRating from "./badRating"
import Collapse from "../../components/Collapse"
import SlideShow from "./slideShow"

function EditHousingById (props) {
    let {x} = props
    return (
        <div className="housing-flex" key={x.id}>
            <SlideShow z={x}/>
            <div className="flex-profil">
                <div className="profil-left">
                    <div className="profil-title">{x.title}</div>
                    <div className="profil-location">{x.location}</div>
                    <div className="profil-tags">
                        {(x.tags).map((tag, index) => 
                            <div key={`${tag}-${index}`} className="profil-tags-elements">{tag}</div>
                        )}
                    </div>
                </div>
                <div className="profil-right">
                    <div className="profil-host">
                        <div className="profil-host-name">{x.host.name}</div>
                        <img className="profil-host-img" src={x.host.picture} alt="Profil du propriétaire"></img>
                    </div>
                    <div className="profil-rating">
                            <GoodRating scaleRating={x.rating}/>
                            <BadRating scaleRating={5-x.rating} />
                    </div>
                </div>
            </div>
            <div className="descript-equip-flex">
                <div className="collapse">
                    <Collapse title="Description" text={x.description} />
                </div>
                <div className="collapse">
                    <Collapse title="Equipements" text={
                        <ul className="equipments">
                            {(x.equipments).map((equipment, index) =>
                                <li className="equipments-elements" key={`${equipment}-${index}`}>{equipment}</li>
                            )}
                        </ul>
                    } />
                </div>
            </div>
        </div>
    )
}

export default EditHousingById