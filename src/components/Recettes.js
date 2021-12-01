import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import'bootstrap/dist/css/bootstrap.min.css';
import Delete from './Delete';


// Page de toutes les recettes
function Recettes() {
  const [recettes, setRecettes] = useState(null);
  

  useEffect(() => {
    fetch('http://localhost:9000/api/recipes')
      .then(res => res.json())
      .then(recipes => {
        setRecettes(recipes);
      });
  }, []);

  return (
    <div className="App">

      <div className="ContainCard">

        {recettes && recettes.map(recette =>
          <div className="Card1" key={recette.id}>

            <h2>{recette.titre}</h2>
            <div><img alt="" id="" style={{ width: '40%' }} src={recette.photo}></img></div>
            <p>{recette.description}</p>
            <div>
              <NavLink to={`recette/${recette.id}`} >
                <button type="button" class="btn btn-outline-secondary">voir</button>
              </NavLink>

              <NavLink to={`change/${recette.id}`} >
                <button type="button" class="btn btn-outline-secondary">modifier</button>
              </NavLink>
            <Delete id={recette.id} setRecettes={setRecettes}/> 
            

            </div> 
            
          </div>
          
        )}
      </div>






    </div>
  );
}

export default Recettes;