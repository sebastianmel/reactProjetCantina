import React from "react";
import Navigation from "../components/Navigation"

const Add = () => {

    var i = 0;

    const addstudent =() =>
    {
        if (i < 15)
        {
            var newRow = document.createElement('tr');

            newRow.innerHTML = '<li> <input type="text" name="Nom'+i+'" ></li>';

            document.getElementById('Students').appendChild(newRow);
            i++;
        }
    }

    function removestudent(element)
    {
        document.getElementById('Students').removeChild(element.parentNode);
        i--;
    }


    return (
        <div className="add">
            <h1>Liste des recettes</h1>
            <br></br>
            <Navigation />
            <br></br>

            <form>
  <fieldset>
    <legend>Ajoutez votre recette</legend>

    
    <label>Nom de la recette</label>
    <input type="text" name="name"></input><br></br>
  
  
    
  
    <label>niveau</label><br></br>
            <select>
                <option>Padawan</option>
                <option>Jedi</option>
                <option>Maitre</option>
            </select>

            <p> <br></br>

    <section id="champcontent">
  
  
  
        
          <div border="1" id="Students">
              <tr>
                  <th>Etape(s) de préparation</th>
                  
                  
              </tr>
              <tbody>
                  <tr >
                      <li >
                          <input type="text" name="Nom"></input>
                      </li>
                      
                      
                      <td>
                          <input type="button" id="add_student" onClick={()=>addstudent()} value="+" />
                          <input type="button" value="-" onclick={()=>removestudent()} />
                      </td>
                  </tr>
              </tbody>
          </div>
          </section> <br></br>
  
        

    <button>Sign up</button>
    <button type="reset">Reset form</button>
  </p>
    
  </fieldset>
</form>

            




        </div>


    );
}

export default Add;