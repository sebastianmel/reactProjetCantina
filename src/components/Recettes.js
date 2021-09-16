import React from 'react';
import { useEffect ,useState} from 'react';

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
      
      {recettes && recettes.map(recette =>
        <div key={recette.id}>
          <h2>{recette.titre}</h2>
          <div><img alt="" id="" style={{ width: '20%' }} src={recette.photo}></img></div>
          <p>{recette.description}</p>
        <div>
          <button>voir</button> 
          <button>modifier</button> 
          <button>supprimer</button> 
        </div>
        </div>
      )}
    </div>
  );
}

export default Recettes;