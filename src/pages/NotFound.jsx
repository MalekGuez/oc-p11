import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="kasa-notfound">
            <h1 className="kasa-notfound__fourofour">404</h1>
            <p className="kasa-notfound__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="kasa-notfound__back">Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default NotFound;