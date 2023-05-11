import klogo from '../../assets/images/klogo.png'
import alogo from '../../assets/images/alogo.png'
import slogo from '../../assets/images/slogo.png'
import logologo from '../../assets/images/logologo.png'
import "./banner.css"
import { NavLink, useLocation } from 'react-router-dom'


function Banner () {
    const currentLocation = useLocation ()
    return (
        <div>
            <header className='navbar'>
                <div className='navbar-logo'>
                    <img src={klogo} className='klogo' alt='Lettre K du logo' />
                    <img src={logologo} className='logologo' alt='Lettre A du logo' />
                    <div className='slogo-alogo'>
                        <img src={slogo} className='slogo-alogo-elements' alt="Lettre S du logo" />
                        <img src={alogo} className='slogo-alogo-elements' alt="Lettre A du logo" />
                    </div>
                </div>
                <div className='navbar-nav'>
                    <NavLink to="/" className={currentLocation.pathname === "/" ? "navbar-nav-elements current-location" : "navbar-nav-elements"}>Accueil</NavLink>
                    <NavLink to="/a-propos" className={currentLocation.pathname === "/a-propos" ? "navbar-nav-elements current-location" : "navbar-nav-elements"}>A propos</NavLink> 
                </div>
            </header>
        </div>
    )
}

export default Banner