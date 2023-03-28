import React, { useState } from 'react';
import Swal from 'sweetalert2';


const Delete = ({dele}) => {

    const [deleteCourse,setDeleteCourse]=useState([])
                
    const deleteProduct = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => setDeleteCourse(result))
        Swal.fire("Good job!", "Data Deleted Successfully!");
        }



    

    return (
        <div>
           
           
           <table style={{width:"200px"}} class="table">
  <thead class="thead-dark">
    <tr style={{width:"200px"}}>
      <th scope="col">Name</th>
      <th scope="col">Button</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <th scope="row">{dele.name}</th>
      <td><button onClick={() => deleteProduct(dele._id)} className="btn btn-primary" variant="primary">Delete</button></td>
    </tr>
    
  </tbody>
</table>
        </div>
    );
};

export default Delete;