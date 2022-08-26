import React from 'react';
//IMPORT GLOBAL STYLING
import '../Assets/Css/LandingPage.css';
//IMPORT COMPONENTS
import Navbar from '../Components/LandingPage/Navbar';
import Hero from '../Components/LandingPage/Hero';
import OurProduct from '../Components/OurProduct/OurProduct';
import AboutUs from '../Components/AboutUs/AboutUs';
import OurCulture from '../Components/OurCulture/OurCulture';
import JoinTeam from '../Components/JoinTeam/JoinTeam';
import BoardDirectors from '../Components/BoardDirector/BoardDirectors';
import Footer from '../Components/Footer/Footer';

function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <OurProduct />
            <AboutUs />
            <OurCulture />
            <JoinTeam />
            <BoardDirectors />
            <Footer />
        </>
    )
}

export default LandingPage