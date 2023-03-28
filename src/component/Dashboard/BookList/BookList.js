import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import './BookList.css';

const BookList = () => {
    const [registration,setRegistration]=useState([]);
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/Registration?email='+loggedInUser.email)
        .then(res=>res.json())
        .then(data=>setRegistration(data))
    },[])




    return (
    /*     <div className="bg-light mt-5 row booklist">
                
            <div className="col-md-2">
            <Sidebar></Sidebar>
            
            </div>
    <div className="col-md-7 ">
    <h5 className="text-primary">Your Total Registration : {registration.length}</h5>
    {
      registration.map(data => 
<table style={{width:"800px"}} class="table">
  <thead class="thead-dark">
    <tr style={{width:"800px"}}>
      <th scope="col">Name</th>
      <th scope="col">Course</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <th scope="row">{data.name}</th>
      <td>{data.course}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
    </tr>
    
  </tbody>
</table>
)  
    }
    </div>
    </div> */

    <div>
         <Sidebar></Sidebar>
   <div className='table-style'>
   <h1 className="text-center custom-margin">
      ALL Orders : {registration?.length}{" "}
    </h1>

    <Table responsive striped bordered hover className="w-75 mx-auto">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Course</th>
          <th>Email</th>
          <th>Phone</th>
          
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
              <i class="far fa-trash-alt"></i>
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
   </div>
  </div>
    );
};

export default BookList;