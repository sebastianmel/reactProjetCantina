import React from "react";

import Recettes from "../components/Recettes";
import Navigation from "../components/Navigation"

const Home = () => {
    return (  
        <div className="home">
             <h1>Liste des recettes</h1>
            <br></br>
            <Navigation/>
            <br></br>
            <Recettes/>
        </div>
           
        
    );
}
 
export default Home;