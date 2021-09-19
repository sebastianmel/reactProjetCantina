import React from "react";
import Navigation from "../components/Navigation";


// Page d'erreur en cas de saisie exterieur à l'url des pages
const NotFound = () => {
    return (
        <div className="notfound">
            <Navigation/>
        <h1 className="top">ERROR 404</h1>
        </div>

    )
}

export default NotFound;