import React from 'react';
//IMPORT REACTSTRAP COMPONENTS
import { Button } from 'reactstrap';
//IMPORT IMAGES
import Logo from '../../Assets/Images/jobseeker_white 1.png';

function Navbar() {
    return (
        <>
            <section id='navbar'>
                <nav className='navbar navbar-expand-lg navbar-dark fixed-top'>
                    <div className='container-fluid navigation'>
                        <a href='/' className='navbar-brand'>
                            <img className='logo' src={Logo} alt="logo" />
                        </a>
                        <button
                            type='button'
                            className='navbar-toggler'
                            data-bs-target='#navbarNav'
                            data-bs-toggle='collapse'
                            aria-controls='navbarNav'
                            aria-expanded='false'
                            aria-label='Toggle Navbar'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='navbarNav'>
                            <ul className='navbar-nav ms-auto group-1'>
                                <li className='nav-item'>
                                    <Button className='b-contact-us'>Contact Us</Button>
                                </li>
                                <li className='nav-item'>
                                    <div className='text-white'><span className='e-language'>English </span>/<span className='i-language'> Indonesia</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}

export default Navbar;