import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';
import './RegisterList.css';

const RegisterList = () => {

    const [registration,setRegistration]=useState([]);
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/Registrations')
        .then(res=>res.json())
        .then(data=>setRegistration(data))
    },[])






    return (
     

    <div>
    <AddMinSidebar></AddMinSidebar>
<div className='table-Style'>
<h1 className="text-center custom-margin">
 ALL Orders : {registration?.length}{" "}
</h1>

<Table responsive striped bordered hover className="w-75 mx-auto ">
 <thead>
   <tr>
     <th>#</th>
     <th>Name</th>
     <th>Course</th>
     <th>Email</th>
     <th>Phone</th>
     {/* <th>Status</th> */}
     <th>Action</th>
   </tr>
 </thead>
 {registration.map((rg, index) => (
   <tbody key={rg?._id}>
     <tr>
       <td>{index}</td>
       <td>{rg?.name}</td>
       <td>{rg?.course}</td>
       <td>{rg?.email}</td>
       <td>{rg?.phone}</td>

      
       <td
         className="delete-btn text-center"
         // onClick={() => handleDelete(order?._id)}
       >
         <i className="far fa-trash-alt"></i>
       </td>
     </tr>
   </tbody>
 ))}
</Table>
</div>
</div>
    );
};

export default RegisterList;