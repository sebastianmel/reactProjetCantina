import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';




// Fonction qui permet d'etre redirigé vers la page d'un événement ciblé

function Change() {

    const { id } = useParams()
    const [data, setData] = useState(null);


    console.log(id);
    useEffect(() => {

        axios
            .get(
                'http://localhost:9000/api/recipe/' + id
            )
            .then((res) => setData(res.data));

    }, []);
    console.log(data);

    function minToHour(minutes){
		//On test que minutes est bien un nombre entier
		var Myexp = new RegExp("^[0-9]+$","g");
		if(Myexp.test(minutes)){
			var nbHour = parseInt(minutes / 60);
			var nbminuteRestante = (minutes % 60);
			if(nbminuteRestante == 0){return(nbHour + "h");}
			else{return(nbHour + "h" + nbminuteRestante);}
		} 
	}



    return (

        <div className="eventChange">
            
            <Navigation />
            <br></br>
            <h1 className="top">Modifier votre recette</h1> <br></br>

            {data &&
                <div className="containeChange">
                    
                    <br></br>
                    <div className="ChangeInfos">
                        <div className="container">
                        
                        <h2 className="">Nom de la recette : </h2>
                            <p className="" > {data.titre} </p>

                            <h2 className="">Niveau : </h2>
                            <small> {data.niveau}</small>

                            <h2 className="">Temps : </h2>
                            <small> {minToHour(data.tempsPreparation)} min</small>

                            <h2 className="">Description : </h2>
                            <p className="">  {data.description}</p>

                            <h2 className="">Ingredients : </h2>
                            <p className="" id="ingredientsChange">  {data.ingredients}</p>

                            <h2 className="">Etapes : </h2>
                            <p className=""   >{data.etapes}</p>

                            <img alt="" id="" style={{ width: '50%' }} src={data.photo}></img>
                        </div>
                    </div>

                    <div>
                        <form>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Nom de la recette</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nom du plat"></input>
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlSelect2">Niveau de la recette</label>
                                <select class="form-control form-control-sm">
                                    <option>padawan</option>
                                    <option>jedi</option>
                                    <option>maitre</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Etape 1,2,3"></textarea>
                            </div>
                            <button type="button" class="btn btn-outline-success">Ajouter</button>
                            <input class="btn btn-success" type="reset" value="Reset"></input>
                        </form>
                    </div>
                </div>

            }
        </div>

    )
};
export default Change;