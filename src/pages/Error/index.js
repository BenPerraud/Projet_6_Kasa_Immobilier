import "./error.css"
import {NavLink} from "react-router-dom"

function ErrorBoundary () {
    return (
        <div className="error">
            <span className="error404">404</span>
            <p className="error404-text">Oups! La page que vous demandez n'existe pas</p>
            <NavLink className="error404-redirect" to="/">Retourner sur la page d'acceuil</NavLink>
        </div>
    )
}

export default ErrorBoundary
