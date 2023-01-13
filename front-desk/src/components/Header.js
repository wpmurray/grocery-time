import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Bodega</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          Current List
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Item
        </NavLink>
      </div>
    </header>
  );
};

export default Header;