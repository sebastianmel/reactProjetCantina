import axios from "axios";
import Recettes from "./Recettes";


// function de suppression des recettes 

const Delete = ({id,setRecettes}) => {
    const delRecette = () => {
        
        axios
            .delete(
                'http://localhost:9000/api/recipe/' + id,

                alert('recette a été supprimé avec succès')
            )
            .then(() => {
                axios
                    .get(
                        'http://localhost:9000/api/recipes/'

                    )
                    .then(recipe=>{
                        setRecettes(
                            recipe.data
                        )
                    })
            });
            
    }
    


    return (
        <button type="button" class="btn btn-outline-danger" onClick={delRecette}>
            supprimer
        </button>
      );
}
 
export default Delete ;