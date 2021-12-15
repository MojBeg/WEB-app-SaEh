import React, {Component} from 'react';
import './Navbar.css';
import logo from './FEKT_logo_CZ.png';

class NavBar extends Component {
    render() {
        return(
        
            <div className="NavBar">
                <header className="NavBar-header">
                <img src={logo} className="NavBar-logo" alt="logo" />
                Stredna a efektivna hodnota
                </header>             
            </div>
        )
    }
}

export default NavBar