import React from "react";

import Recettes from "../components/Recettes";
import Navigation from "../components/Navigation"


// home page avec les recettes (components)
const Home = () => {
    return (  
        <div className="home">
            <Navigation/>
            <h1 className="top" style={{ fontSize: '40px' }}>Liste des recettes</h1>
            <br></br>
            <Recettes/>
        </div>
           
        
    );
}
 
export default Home;