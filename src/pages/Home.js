import React from "react";

import Recettes from "../components/Recettes";
import Navigation from "../components/Navigation"

const Home = () => {
    return (  
        <div className="home">
            <Navigation/>
            <h1 style={{ fontSize: '40px' }}>Liste des recettes</h1>
            <br></br>
            <Recettes/>
        </div>
           
        
    );
}
 
export default Home;