import "./housing.css"
import GoodRating from "./Rating/goodRating.js"
import BadRating from "./Rating/badRating.js"
import Collapse from "../../components/Collapse"
import SlideShow from "./SlideShow/slideShow"

function EditHousingById (props) {
    let {x} = props
    let fullName = (x.host.name).split(" ")

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
                        <div className="profil-host-fullname">
                            <div className="profil-host-name">{fullName[0]}</div>
                            <div className="profil-host-name">{fullName[1]}</div>
                        </div>
                        <img className="profil-host-img" src={x.host.picture} alt="Profil du propriétaire"></img>
                    </div>
                    <div className="profil-rating">
                            <GoodRating scaleRating={x.rating}/>
                            <BadRating scaleRating={5-x.rating} />
                    </div>
                </div>
            </div>
            <div className="descript-equip-flex">
                <Collapse title="Description" text={x.description} />
                <Collapse title="Equipements" text={
                    <ul className="equipments">
                        {(x.equipments).map((equipment, index) =>
                            <li className="equipments-elements" key={`${equipment}-${index}`}>{equipment}</li>
                        )}
                    </ul>
                } />
            </div>
        </div>
    )
}

export default EditHousingById