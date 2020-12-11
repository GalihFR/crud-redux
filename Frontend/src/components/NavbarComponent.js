import React from "react";
import './NavbarComponent.css';

function NavbarComponent() {
    return (
        <>
        <nav className="navbar sticky-top navbar-light nav-shadow"> 
            <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={require('../images/logoCRUDContact.svg')} width="30" height="30" className="d-inline-block align-top" alt="Logo"/> CRUD Contact
                    </a>
            </div>
        </nav>
        </>
  );
}

export default NavbarComponent;
