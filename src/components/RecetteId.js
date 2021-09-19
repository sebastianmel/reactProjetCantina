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

    return (

        <div className="event">
            <Navigation />

            {data &&
                <div className="container">
                    <br></br>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">{data.titre} </h1><small>niveau : {data.niveau}</small>
                            <p className="lead">{data.description}</p>
                            <div className="photo_ingredients" >
                                <img alt="" id="" style={{ width: '25%'}} src={data.photo}></img>
                                <p className="lead" id="ingredients">{data.ingredients}</p>
                            </div>
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