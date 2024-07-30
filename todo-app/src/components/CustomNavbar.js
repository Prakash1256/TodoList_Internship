import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTh, faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedMode);
        document.body.className = savedMode ? 'dark-mode' : 'light-mode';
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            document.body.className = newMode ? 'dark-mode' : 'light-mode';
            localStorage.setItem('darkMode', newMode);
            return newMode;
        });
    };

    return (
        <Navbar expand="lg" className="border-bottom border-primary  ">
            <Navbar.Brand href="#home">
            <FontAwesomeIcon icon={faBars}  />
             <h1>Doit</h1>   
                
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#search">
                    
                        <FontAwesomeIcon icon={faSearch} />
                    </Nav.Link>
                    <Nav.Link href="#menu">
                        <FontAwesomeIcon icon={faTh} />
                    </Nav.Link>
                    <Nav.Link href="#toggle-theme" onClick={toggleDarkMode}>
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default CustomNavbar;
