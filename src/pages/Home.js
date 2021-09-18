import React from "react";

import Recettes from "../components/Recettes";
import Navigation from "../components/Navigation"

const Home = () => {
    return (  
        <div className="home">
            <Navigation/>
            <h1>Liste des recettes</h1>
            <br></br>
            <Recettes/>
        </div>
           
        
    );
}
 
export default Home;