import React, { createContext, useState } from 'react';
import {Link, useLoaderData , Outlet} from 'react-router-dom';


export const PhoneContext = createContext([])


const AllPhones = () => {
    const [allPhones, setAllPhones] = useState(useLoaderData())

 //   console.log(allPhones);



    return (
      <div className="container">
        <PhoneContext.Provider value={allPhones}>
          <h1>Phone details by front end rendering</h1>
          <div className="row">
            <div className="col-4">
              <ul>
                {allPhones.map((phone) => {
                  return (
                    <li key={phone.id}>
                      <Link to={`/all-phones/phone/${phone.id}`}>
                        {phone.name}{" "}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-8">
              <Outlet />
            </div>
          </div>
        </PhoneContext.Provider>
      </div>
    );
};

export default AllPhones;