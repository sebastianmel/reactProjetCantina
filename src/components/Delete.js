import axios from "axios";


const Delete = ({id,setRecettes}) => {
    const delRecette = () => {
        
        axios
            .delete(
                'http://localhost:9000/api/recipe/' + id
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
        <button onClick={delRecette}>
            supprimer
        </button>
      );
}
 
export default Delete ;