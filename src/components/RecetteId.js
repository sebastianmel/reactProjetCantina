import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';




// Fonction qui permet d'etre redirigé vers la page d'un événement ciblé

function RecetteId() {

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
            
        <div className="event">
            <Navigation /> <br></br>

            {data &&
                <div className="container">
                    <br></br>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">{data.titre} </h1> 
                            <small>Niveau : {data.niveau} | </small>
                            <small>Pour {data.personnes} personne(s) | </small>
                            <small >Temps : {minToHour(data.tempsPreparation)} min  </small>
                            <p className="lead">{data.description}</p>
                            <div className="photo_ingredients" >
                                <img alt="" id="" style={{ width: '25%'}} src={data.photo}></img>
                                <p className="lead" id="ingredients">{data.ingredients.map((i) => {
                                    return <li key={i[1]}>{i[0]} {i[1]}</li>
                                })}</p>
                            </div>
                            <br></br>
                            <br></br>
                            <h2 className="lead">Etapes :</h2>
                            <p className="lead">{data.etapes}</p>
                        </div>
                    </div>
                </div>

            }
        </div>

    )
};
export default RecetteId;