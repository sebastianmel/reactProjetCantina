import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';




// Fonction qui permet de modifier une recette deja existante

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


    
    // ChangeAdd met a jour les valeurs des input
    const ChangeAdd = (e) => {
        console.log(e.target.value);

        const name = e.target.name;
        const value = e.target.value;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));

        console.log(data);


    }



    const AddRecette = () => {
        const nbrPersonnes = parseInt(data.personnes)
        setData(prevState => ({ ...prevState, personnes: nbrPersonnes }))
        const timePrepare = parseInt(data.tempsPreparation)
        setData(prevState => ({ ...prevState, tempsPreparation: timePrepare }))

        axios.post('http://localhost:9000/api/recipes' ,{
            titre: data.titre ,
            description: data.description,
            niveau: data.niveau,
            personnes: data.personnes,
            tempsPreparation: data.tempsPreparation,
            ingredients: data.ingredients,
            etapes: data.etapes,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        



    }
    // Function qui ajoute les champs des ingredients 
    var i = 0;

    const addstudent = () => {
        if (i < 15) {
            var newRow = document.createElement('tr');

            newRow.innerHTML = '<td> <input type="text" name="Nom' + i + '" ><td> <input type="text" name="Prenom' + i + '" ></td><td><input type="text" name="classe' + i + '" ></td><td><input type="button" id="add_student()" onClick="addstudent()" value="+" /><input type="button" value="-" onclick="removestudent(this.parentNode)"></td>';


            // newRow.innerHTML = '<tr> <input type="text" name="Nom' + i + '" > </tr>';

            document.getElementById('Students').appendChild(newRow);
            i++;
        }
    }

    function removestudent(element) {
        document.getElementById('Students').removeChild(element.parentNode);
        i--;
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

                            <h2 className="">Personnes : </h2>
                            <small> {data.personnes}</small>

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
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nom du plat" name="titre" value={data.titre} onChange={ChangeAdd}></input>
                    <label for="exampleFormControlInput1">Description</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="courte description du plat" name="description" value={data.description} onChange={ChangeAdd}></input>
                    <label for="exampleFormControlInput1">Temps de préparation</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="ecrire en minute" onChange={ChangeAdd} name="tempsPreparation" value={data.tempsPreparation} ></input>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlSelect2">Niveau de la recette</label>
                    <select class="form-control form-control-sm" onChange={ChangeAdd} name="niveau" value={data.niveau}>
                        <option selected ></option>
                        <option selected value="padawan">padawan</option>
                        <option>jedi</option>
                        <option>maitre</option>
                    </select>

                    <label for="exampleFormControlInput1"> Nombre de personnes</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="ecrire en minute" onChange={ChangeAdd} name="personnes" value={data.personnes} ></input>

                </div>
                <div class="form-group">

                    <label for="exampleFormControlTextarea1">Etapes</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Etape 1,2,3" onChange={ChangeAdd} name="etapes" value={data.etapes}></textarea>


                    <div border="1" id="Students">
                        <tr>
                            <th><label for="exampleFormControlTextarea1">Ingredients :</label>
                                <input type="button" class="form-control form-control-sm" id="add_student" onClick={() => addstudent()} value="+" />


                                <input type="button" class="form-control form-control-sm" value="-" onclick={() => removestudent()} />
                            </th>


                        </tr>
                        <tbody>
                            <tr >
                                <td>
                                    <label for="exampleFormControlInput1">Quantité</label>
                                    <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="30"></input>

                                </td>


                                <td>
                                    <label for="exampleFormControlSelect2">Unité</label>
                                    <select class="form-control form-control-sm" >
                                        <option>cl</option>
                                        <option>L</option>
                                        <option>g</option>
                                        <option>mg</option>
                                        <option>ml</option>
                                    </select>

                                </td>

                                <td>
                                    <label for="exampleFormControlInput1"></label>
                                    <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder=" de lait"></input>

                                </td>

                            </tr>
                        </tbody>
                    </div>


                </div>



                <button type="button" class="btn btn-outline-success" onClick={AddRecette} >Ajouter</button>
                <input class="btn btn-success" type="reset" value="Reset"></input>


            </form>
                    </div>
                </div>

            }
        </div>

    )
};
export default Change;