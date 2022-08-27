import React from 'react';
import logobrand from '../../Assets/Images/logos.png';
//IMPORT REACT ICONS
import { FiArrowRight } from 'react-icons/fi';

function OurProduct() {
    return (
        <>
            <section id='ourproduct'>
                <div className='container'>
                    <div className='row'>
                        <h1 className='ourproduct-title'>Our Products</h1>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-12'>
                            <div className='wrapper bg-color-1'>
                                <center>
                                    <div className='wrapper-title'>
                                        For Candidate
                                    </div>
                                    <div className='wrapper-brand'>
                                        <img src={logobrand} alt='logo' />
                                        jobseeker.app
                                    </div>
                                    <div className='wrapper-desc'>
                                        <p>Social recruitment platform untuk para pencari kerja, terutama untuk non white-collar worker yang jumlahnya 4-5x lebih banyak daripada angkatan kerja white collar. Jobseker.App memungkinkan pencari kerja untuk mencari kerja secara lebih mudah, cepat, dan sesuai dengan lokasi mereka.</p>
                                    </div>
                                    <a className='more-btn' href='/'>Learn More <FiArrowRight /></a>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center mt-4'>
                        <div className='col-12'>
                            <div className='wrapper bg-color-2'>
                                <center>
                                    <div className='wrapper-title'>
                                        For Employer
                                    </div>
                                    <div className='wrapper-brand'>
                                        <img src={logobrand} alt='logo' />
                                        jobseeker.partners
                                    </div>
                                    <div className='wrapper-desc'>
                                        <p>Indonesia memasuki era keemasan bonus demografi yang diprediksi mencapai puncaknya pada 2030. Manfaatkan peluang ini untuk mendapatkan tenaga kerja terbaik dengan mudah, cepat, terdekat dari lokasi usaha.</p>
                                    </div>
                                    <a className='more-btn' href='/'>Learn More <FiArrowRight /></a>
                                </center>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center mt-4'>
                        <div className='col-6'>
                            <div className='wrapper bg-color-2'>
                                <center>
                                    <div className='wrapper-brand custom-padding'>
                                        <img src={logobrand} alt='logo' />
                                        jobseeker.partners
                                    </div>
                                    <div className='wrapper-desc'>
                                        <p>Indonesia memasuki era keemasan bonus demografi yang diprediksi mencapai puncaknya pada 2030. Manfaatkan peluang ini untuk mendapatkan tenaga kerja terbaik dengan mudah, cepat, terdekat dari lokasi usaha.</p>
                                    </div>
                                    <a className='more-btn' href='/'>Learn More <FiArrowRight /></a>
                                </center>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='wrapper bg-color-2'>
                                <center>
                                    <div className='wrapper-brand custom-padding'>
                                        <img src={logobrand} alt='logo' />
                                        jobseeker.partners
                                    </div>
                                    <div className='wrapper-desc'>
                                        <p>Indonesia memasuki era keemasan bonus demografi yang diprediksi mencapai puncaknya pada 2030. Manfaatkan peluang ini untuk mendapatkan tenaga kerja terbaik dengan mudah, cepat, terdekat dari lokasi usaha.</p>
                                    </div>
                                    <a className='more-btn' href='/'>Learn More <FiArrowRight /></a>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurProduct