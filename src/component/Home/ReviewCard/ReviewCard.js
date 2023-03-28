import React from 'react';
import './ReviewCard.css'

const ReviewCard = (props) => {
    const {name,imageURL,designation,description}=props.testimonial;
    return (
        <div className="col-md-3 bg-white  m-2 my-5">
         <div className=" d-flex mb-3 align-items-center">
            <img className="mx-3 mt-2 reviewImage" src={imageURL} alt="" width="100px"/>
            <div>
                <h6 className="text-primary">{name}</h6>
                <p className="m-0">{designation}</p>
            </div>
        </div>


        <div className="card-body">
            <p className="card-text text-center">{description}</p>
        </div>
        
   </div>
    );
};

export default ReviewCard;