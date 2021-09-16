import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


// Fonction qui permet d'etre redirigé vers la page d'un événement ciblé

function RecetteId() {

    const RecetteId = useParams()
    const [data, setData] = useState(null);
    const id = RecetteId.id


    useEffect(() => {

        axios
            .get(
                'https://localhost:9000/api/recipe/'+ id
            )
            .then((res) => setData(res.recette.id));
    }, []);

    return (

        <div className="event">
            <Navigation />

            {data &&
                <div className="container">


                    <div className="off">

                        <h1>{data.fields.title} <br></br> <br></br></h1>

                        <div className="image-container">
                            <div><img alt="" id="cardImg" style={{ width: '90%' }} src={data.fields.cover_url}></img></div>
                            <div>






                            </div>

                    </div>
            }
                    </div>

                    )
};

                    export default RecetteId;