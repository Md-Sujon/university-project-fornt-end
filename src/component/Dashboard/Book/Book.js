import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { UserContext } from '../../../App';
import Swal from 'sweetalert2';

const Book = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit} = useForm(' ');
  const [registrationData,setRegistrationData] = useState(null)

  const  onSubmit = data => {
    setRegistrationData(data)
};

const handlePaymentSuccess = paymentId => {
  
  const eventData={
    name: registrationData.name,
    email: registrationData.email,
    course:  registrationData.course,
    paymentId,
    phone : registrationData.phone
    
}

const url =`http://localhost:5000/AddRegistration`;
  
  fetch(url, {
   method:'POST',
   headers: {
       'content-Type': 'application/json'
   },
   body: JSON.stringify( eventData , {email: loggedInUser.email})
  })
  .then(res => res.json())
  .then(success => {
    if(success){
      Swal.fire("Good job!", "Registration Successfully!");
    }
  })
}



    return (
        <div className="bg-light mt-5 row">
           
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
    <form  style={{display:registrationData ? 'none':'block'}} className="col-md-6" onSubmit={handleSubmit(onSubmit)} >
    
    <h1>Registration From</h1>
    
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>

    <input type="name" name="name"   {...register("name")} className="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Enter Your Email</label>
    <input type="email"   {...register("email")} name="email" className="form-control"  placeholder="Enter Your Email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Enter Your Course Name</label>
    <input type="text" name="course"   {...register("course")} className="form-control"   placeholder="Enter Your Course Name"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Enter Your phone Number</label>
    <input type="phone" name="phone"   {...register("phone")} className="form-control"   placeholder="Enter Your Phone Number"/>

   </div>
 <br/>
  <button type="submit" className="btn-custom">Submit</button>
</form>

<div style={{display:registrationData ? 'block':'none'}} className="col-md-3">

       <h1 text-center>Please give payment</h1>
       <h4 text-center> 150 $</h4> 
       <br/>
       <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
       <br/>
     </div>

</div>
           
       
    );
};

export default Book;