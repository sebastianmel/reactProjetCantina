
import React from 'react';
import { NavLink } from 'react-router-dom';


// Barre de navigation réutiliser sur toutes les pages
const Navigation = () => {
    return (
        <div className="navigation">
            <h1 className="lead" style={{ fontSize: '40px' }}>EaslyCook</h1>
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/recettes/add" activeClassName="nav-active">
                Ajouter une recette
            </NavLink>           
        </div>

    );
};

export default Navigation;