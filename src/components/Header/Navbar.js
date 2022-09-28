import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();
  return (
    <div>
    <div className={menuIcon ? "navbar active" : "navbar"}>
      <ul className="navbar-lists">
        <li>
          <NavLink
            to="/products"
            className="navbar-link "
            onClick={() => setMenuIcon(false)}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="navbar-link">
           <button>Cart</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="navbar-link">
            <button>Login</button>
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar
