/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import './Navbar.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import firebaseConfig from './../../Login/FirebaseConfig';
import { localStoreKey } from "../../../Data/Constant";
import Swal from "sweetalert2";
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);;
}else {
  firebase.app();
}

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if(loggedInUser?.email){
      fetch('http://localhost:5000/admin', {
        method: 'POSt',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({email: loggedInUser?.email})
      })
      .then(res =>res.json())
      .then(data =>setIsAdmin(data))
    }
   

  }, [loggedInUser?.email]);

  const signOutUser=()=>{
    localStorage.removeItem(localStoreKey.user);
    setLoggedInUser({})
    Swal.fire("Good job!", "Logout Successfully!");
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark NavColor">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <h3>
              <Link className="nav-link ml-5 text-white" to="/Home">
              Educational Content Sharing Platform
              </Link>
            </h3>
            <div class=" navbar-nav ms-auto mb-2 mb-lg-0">
             
                { <div className="d-flex">
                    <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/Home"
              >
                Home
              </Link>
            
              <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/ContactUs"
              >
                Contact Us
              </Link>

              <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/Project"
              >
                Project
              </Link>
            
                  </div>
                }


               {
                loggedInUser?.email ?
                <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                onClick={signOutUser}
                to="/Login"
              >
                Logout
              </Link>
                :
                <Link
                class="nav-link ms-5 btn-custom active"
                aria-current="page"
                href="#"
                to="/Login"
              >
                Login
              </Link>
               }
                {isAdmin && loggedInUser?.email && 
                  <div>
                    <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/Admin"
              >
              Admin DashBoard
              </Link>
                  </div>
                }
               
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
