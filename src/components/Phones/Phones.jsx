import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import SinglePhone from './SinglePhone';

const Phones = () => {
    const phones = useLoaderData()
 //   console.log(phones);
    return (
      <div>
        <div className="container">
          <div className="mt-3 mb-3 border p-2">
            <h1>Phone Details by backend rendering</h1>
            <p>
              Single Phone loading through sever each time, i.e when i click a
              phone it will fetch data from the server for specific phone and
              load it to show{" "}
            </p>
            <div className="row">
              <div className="col-4">
                <ul>
                  {phones.map((phone) => {
                    return (
                      <li key={phone.id}>
                        <Link to={`/phones/phone/${phone.id}`}>
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
          </div>
        </div>
       </div>
    );
};

export default Phones;