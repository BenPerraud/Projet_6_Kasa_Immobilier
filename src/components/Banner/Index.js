import klogo from '../../assets/images/klogo.png'
import alogo from '../../assets/images/alogo.png'
import slogo from '../../assets/images/slogo.png'
import logologo from '../../assets/images/logologo.png'
import "./banner.css"
import { NavLink } from 'react-router-dom'


function Banner () {
    return (
        <div>
            <header className='navbar'>
                <div className='navbar-logo'>
                    <img className="navbar-logo-k" src={klogo} alt="Lettre K du logo" />
                    <div className='navbar-logo-logo-s-a'>
                        <img src={logologo} alt="Logo maison" />
                        <div className='navbar-logo-s-a'>
                            <img src={slogo} alt="Lettre S du logo" />
                            <img src={alogo} alt="Lettre A du logo" />
                        </div>
                    </div>
                </div>
                <nav className='navbar-nav'>
                    <NavLink to="/" className='navbar-nav-elements'>Accueil</NavLink>
                    <NavLink to="/a-propos" className='navbar-nav-elements'>A propos</NavLink> 
                </nav>
            </header>
        </div>
    )
}

export default Banner