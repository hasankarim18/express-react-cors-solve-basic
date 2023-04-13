import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData()
  //  console.log(phone);
    return (
      <div
        style={{ borderLeft: "1px solid gray", height: "100%" }}
        className="p-4"
      >
        <div className="d-flex">
          <h3 className="">
            Phone Name: <span className="text-primary"> {phone?.name} </span>
          </h3>
          <img className="ms-3" src={phone?.image} alt="" />
        </div>
      </div>
    );
};

export default Phone;