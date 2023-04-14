import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PhoneContext } from './AllPhones';

const SinglePhone = ({phones}) => {
    const allPhones = useContext(PhoneContext)
    const {id } = useParams()
    let selectedPhone = {}


   if(allPhones && allPhones.length > 0){
    selectedPhone = allPhones.find((phone) => phone.id === parseInt(id, 10));    
   }

    return (
        <div>
            Loading single phone front end loading 
            <h1>{id}</h1>
            <div className="d-flex">
                <div>
                    <h2>Phone Name: <span className="text-danger">{selectedPhone?.name}</span> </h2>
                </div>
                <div className="ms-4">
                    <img src={selectedPhone?.image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SinglePhone;