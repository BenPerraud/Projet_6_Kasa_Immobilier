import "./footer.css"
import logofooter from "./../../assets/images/footer-logo.png"

function Footer () {
    return (
        <div className="footer-container">
            <img className="footer-container-logo" src={logofooter} alt="Logo footer"></img>
            <p className="footer-container-rights">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer