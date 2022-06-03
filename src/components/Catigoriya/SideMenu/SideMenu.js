import React from 'react';
import './SideMenu.css';
import { Link } from "react-router-dom";
// import logo from '../../logo.svg'; 


const SideMenu = prop => {
    let sideMenuClass = "side-menu";
    if (prop.show) {
        sideMenuClass = "side-menu open";
    }

    return (
        <div>
            <nav className={sideMenuClass}>
                <ul className="sideMenu__ul">
                    {/* <img src={logo} alt="Logo" />  */}
                    <li><Link to="/" onClick={prop.remove}>Home</Link></li>
                    <li><Link to="/about" onClick={prop.remove}>About</Link></li>
                </ul>
                
            </nav>
        </div>
    )
};

export default SideMenu;