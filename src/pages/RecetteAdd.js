import React from "react";
import { useState } from 'react';
import axios from "axios";
import Navigation from "../components/Navigation"



// function qui ajoute les recettes


const Add = () => {
    // stock les données des recettes dans un format objet pour que axios les envoie a l api
    const [data, setData] = useState({
        titre: "",
        description: "",
        niveau: "",
        personnes: 1,
        tempsPreparation: 1,
        ingredients: [["30g","chcolat"]],
        etapes: ["etape1","etape2"],
        photo: "http://fr.web.img2.acsta.net/pictures/18/02/19/16/45/0688641.jpg",
        
    });
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
        // const nbrPersonnes = parseInt(data.personnes)
        // setData(prevState => ({ ...prevState, personnes: nbrPersonnes }))
        // const timePrepare = parseInt(data.tempsPreparation)
        // setData(prevState => ({ ...prevState, tempsPreparation: timePrepare }))

        axios.post('http://localhost:9000/api/recipes' ,{
            titre: data.titre ,
            description: data.description,
            niveau: data.niveau,
            personnes: parseInt(data.personnes),
            tempsPreparation: parseInt(data.tempsPreparation),
            ingredients: data.ingredients,
            etapes: data.etapes,
            photo: data.photo,
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
        <div className="add">


            <Navigation />
            <br></br>


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
                    <input type="number" class="form-control" id="exampleFormControlInput2" placeholder="ecrire en minute" onChange={ChangeAdd} name="personnes" value={data.personnes} ></input>

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


    );
}

export default Add;







// Tableau add etapes



