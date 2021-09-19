import React from "react";
import { useState } from 'react';
import axios from "axios";
import Navigation from "../components/Navigation"

const Add = () => {

    const [data, setData] = useState({
        titre: "",
        description: "",
        niveau: "",
        personnes: 1,
        tempsPreparation: 1,
        ingredients: [{ quantite: 1, unite: "", produit: "" }],
        etapes: ["",""],
        
    });

    const ChangeAdd = (e) => {
        console.log(e.target.value);

        const name = e.target.name;
        const value = e.target.value;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));


    }



    const AddRecette = () => {

        axios.post('http://localhost:9000/api/recipe/:id',{
            titre: useState.titre ,
            description: "",
            niveau: "",
            personnes: 1,
            tempsPreparation: 1,
            ingredients: [{ quantite: 1, unite: "", produit: "" }],
            etapes: ["",""],
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });



    }


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
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="ecrire en minute" onChange={ChangeAdd} name="tempsPreparation" value={data.tempsPreparation} ></input>
                </div>

                <div class="form-group">
                    <label for="exampleFormControlSelect2">Niveau de la recette</label>
                    <select class="form-control form-control-sm" onChange={ChangeAdd} name="niveau" value={data.niveau}>
                        <option>padawan</option>
                        <option>jedi</option>
                        <option>maitre</option>
                    </select>

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
                                    <select class="form-control form-control-sm">
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


