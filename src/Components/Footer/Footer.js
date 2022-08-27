import React from 'react';
//IMPORT REACT ICONS
import { AiOutlineMail, AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai';
import { FaFacebookF, FaTiktok, FaTelegram } from 'react-icons/fa';
import { BsInstagram, BsYoutube } from 'react-icons/bs';

function Footer() {
    return (
        <>
            <section id='footer'>
                <div className='container-fluid footer'>
                    <div className='row py-5'>
                        <h1>Logo</h1>
                    </div>
                    <div className='row pt-3'>
                        <div><b>SINGAPORE</b></div>
                        <p>10 Anson Road #22-02, International Plaza, Singapore, 079903</p>
                    </div>
                    <div className='row pt-2'>
                        <div><b>INDONESIA</b></div>
                        <p>AD Premier Office Park, 9th Floor <br></br> Jl. TB Simatupang No.5, Ragunan, Pasar Minggu <br></br>South Jakarta City, Jakarta 12550</p>
                    </div>
                    <div className='row pt-2'>
                        <p><span className='icon-email'><AiOutlineMail /></span> info@jobseeker.company</p>
                        <p><span className='icon-wa'><AiOutlineWhatsApp /></span> +62813 1881 7887</p>
                    </div>
                    <div className='row'>
                        <ul className='socials icon'>
                            <div className='icon'><a className='fb' href='https://www.facebook.com/'><FaFacebookF /></a></div>
                            <div className='icon'><a className='ig' href='https://www.instagram.com/'><BsInstagram /></a></div>
                            <div className='icon'><a className='linked' href='https://www.linkedin.com/'><AiFillLinkedin /></a></div>
                            <div className='icon'><a className='tik' href='https://www.tiktok.com/'><FaTiktok /></a></div>
                            <div className='icon'><a className='yt' href='https://www.youtube.com/'><BsYoutube /></a></div>
                            <div className='icon'><a className='telegram' href='https://www.telegram.com/'><FaTelegram /></a></div>
                        </ul>
                    </div>
                    <div className='row'>
                        <hr className='line'></hr>
                    </div>
                    <div className='row'>
                        <div className='col-9'>
                            <div className='copyright'>
                                <div>Copyright © 2022 JobSeekerApps Pte. Ltd</div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='small-tag text-end'>
                                <a className='pe-4' href='/'>Privacy Policy</a>
                                <a href='/'>Terms of Service</a>
                            </div>
                        </div>

                    </div>
                </div>


            </section>
        </>
    )
}

export default Footer