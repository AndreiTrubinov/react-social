import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss'

const Navbar = () => {
    
    return <nav className="nav">
        <ul className="nav-list">
            <li className="nav-list_item">
                <NavLink to="/profile" className={ navData => navData.isActive ? styles.active : 'App-link'} >Profile</NavLink>
            </li>
            <li className="nav-list_item">
                <NavLink to="/dialogs" className={ navData => navData.isActive ? styles.active : 'App-link'} >Messages</NavLink>
            </li>
            <li className="nav-list_item">
                <a href="#" className="App-link">News</a>
            </li>
            <li className="nav-list_item">
                <a href="#" className="App-link">Settings</a>
            </li>
        </ul>
    </nav>
}
export default Navbar;