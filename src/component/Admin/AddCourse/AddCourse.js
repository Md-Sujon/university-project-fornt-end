import React, { useState } from 'react';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddCourse = () => {
  const { register,reset, handleSubmit} = useForm();
  const [imageURL,setImageURL]=useState(null);

  const onSubmit = data => {
    const eventData={
        name: data.name,
        description: data.description,
        imageURL: imageURL
    }
    reset();
    const url =`http://localhost:5000/course`;
    
    fetch(url, {
     method:'POST',
     headers: {
         'Content-Type': 'application/json'
     },
     body: JSON.stringify(eventData)
    })
    .then(res=> console.log('server side response', res));
    alert("Data Added");
};

         const handleImageUpload = event => {
          console.log(event.target.files[0]);
          const imageData = new FormData();
         imageData.set('key', '32a97345521821b6bd065fe88e703ca3');
         imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', 
    imageData)
     .then(function (response) {
     setImageURL(response.data.data.display_url);
     Swal.fire("Good job!", "Course Added Successfully!");
      })
      .catch(function (error) {
       console.log(error);
      });
      }


    return (
        <div className="bg-light mt-5 row">
           
            <div className="col-md-2">
            <AddMinSidebar></AddMinSidebar>
            </div>
    <form className="col-md-7" onSubmit={handleSubmit(onSubmit)}>
    <h1>Add Course</h1>
  <div className="form-group">
       <label for="exampleInputPassword1">Add Your Course Title</label>
    <input type="text" className="form-control"  name="name" id="exampleInputEmail1"   {...register("name")} aria-describedby="emailHelp" placeholder="Enter Title"/>
    </div>
  <br/>
  <div className="form-group">
    <label for="exampleInputPassword1">Description</label>
    <textarea className="form-control" name="description" id="exampleFormControlTextarea1" rows="3"   {...register("description")} placeholder="Enter Your Designation"></textarea>
  </div>
  <br/>
  <div className="form-group">
  <label for="exampleFormControlFile1">Image</label>
  <br></br>
    <input type="file" name="example" onChange={handleImageUpload} className="form-control-file" id="exampleFormControlFile1"/>
  </div>
   <br/>
  
  <button type="submit" className=" btn-custom">Submit</button>
</form>
 </div>
    );
};

export default AddCourse;