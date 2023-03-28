import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const CourseInfo = () => {
    const { _id } = useParams();

  const [course, setCourse] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/CourseInfo/${_id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
     
  }, []);
    return (
      <div className="row ">
        <Navbar></Navbar>
      <div className="col-md-6 col-lg-8 col-sm-12">
        <div className=" mt-lg-5">
          <div>
            <img className="mt-lg-5 mx-lg-5"   style={{ height: "100px" }} src={course?.imageURL} alt="" />
          </div>
          <div>
            <h3 className="mt-5">{course?.name}</h3>
            <p>{course?.description}</p>
            {/* <p className="product-price">
              Price : <span className="text">{course?.price} </span> BDT
            </p> */}
          </div>
        </div>
      </div>

      {/* place order  */}
      <div className="col-md-6 col-lg-4 col-sm-12 border border p-1 mt-2 custom-con">
        <h1 className="mt-3 text-center  text">Registration Now:</h1>
        <div className="login-box  m-auto mt-3">
          <div className=" d-flex justify-content-center align-items-center">
            <div className="login-form mx-auto text-center">
            

            <Link to={"/dashboard"}>
        <button type="submit" className="btn-custom ">
          Registration Now
        </button>
      </Link>
           
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CourseInfo;