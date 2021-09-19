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
            
            
            <Navigation />
            <br></br>
            
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
</form>

            
</div>


    );
}

export default Add;







// Tableau add etapes


// <section id="champcontent">
  
  
  
        
//   <div border="1" id="Students">
//       <tr>
//           <th>Etape(s) de préparation</th>
          
          
//       </tr>
//       <tbody>
//           <tr >
//               <li >
//                   <input type="text" name="Nom"></input>
                  
//               </li>
              
              
//               <td>
//                   <input type="button" id="add_student" onClick={()=>addstudent()} value="+" />
//                   <input type="button" value="-" onclick={()=>removestudent()} />
//               </td>
//           </tr>
//       </tbody>
//   </div>
//   </section>