import React, { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return ( 
            <nav id="container-navbar" className="navbar navbar-expand-md sticky-top navbar-light">
                <div className="container-fluid">
                    <span className="navbar-brand" id="navbar-logo">
                        <img id="navbar-logo-img" src="navbarlogoimage.png" alt="Logo" className="d-inline-block align-top" />
                        <img id="navbar-logo-wordmark" src="navbarlogowordmark.png" alt="Logo" className="d-inline-block align-top" />
                        <span className="hidden">My Logo</span>
                        </span>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="toggleMobileMenu">
                        <ul id="navbar-list" className="navbar-nav ms-auto text-center">
                            <li className="nav-item">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/resources">Resources</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="gradient-container-top"></div>
            </nav>
     );
}
 
export default Navbar;