import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Add from './Add';
import './Header.css'
import Dropdown from "./Dropdown";
const Header = () => {
  return (
    <div>
       <Add/>
      <div className="Header">
      <NavLink to="/">
        <img src="https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg" alt="my logo img" className="logo"/>
      </NavLink>
      <input placeholder="Find Lipstick, Eyeliner, Makeup Tutorial, etc.."/>
      <Navbar />
      </div>
      <Dropdown/>
    </div>
  );
};
export default Header