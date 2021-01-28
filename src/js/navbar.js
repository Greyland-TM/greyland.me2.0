import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => (
        <div className="navbar">
            <div className="toggle-container">
                <label className="switch">
                    <input  type="checkbox"/>
                    <span className="slider round"></span>
                </label>
                <p className="toggle-container__lable">Dark Mode</p>
            </div>

            <ul className="navbar__list">
                <li className="navbar__item"><NavLink className="navbar__link" to='/' exact>Home</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__link" to='/about-me' exact>About</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__link" to='/projects' exact>Projects</NavLink></li>
                <li className="navbar__item"><NavLink className="navbar__link" to='/contact' exact>Contact</NavLink></li>
            </ul>
        </div>
);

export default Navbar;