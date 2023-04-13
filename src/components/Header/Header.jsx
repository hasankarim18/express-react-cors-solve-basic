import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <div className="container pt-3 pb-3">
        <div className="row">
          <div className="col-4">
            <h1>Phones Loader</h1>
          </div>
          <div className="col-8 d-flex align-items-center justify-content-end">
            <div className="d-flex align-items-center  ">
              <NavLink className="ms-4 nav-link fs-5 " to="/">
                Home
              </NavLink>
              <NavLink className="ms-4 nav-link fs-5 " to="/phones">
                Phones by Backend Loading
              </NavLink>
              <NavLink className="ms-4 nav-link fs-5 " to="/all-phones">
                Phones by Fronend Loading
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;