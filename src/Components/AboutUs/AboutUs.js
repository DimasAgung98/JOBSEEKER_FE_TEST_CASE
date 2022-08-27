import React from 'react';
import Pakchan from '../../Assets/Images/group.png';

function AboutUs() {
    return (
        <>
            <section id='aboutus'>
                <div className='about-us-bg mx-auto'>
                    <div className='wrapper-about'>
                        <a href='https://youtu.be/DgqDDI2R9m4/' target="_blank" rel='noreferrer'><img src={Pakchan} alt='pakchan' /></a>
                        <div className='row text-white mt-5'>
                            <div className='col-6'>
                                <div className='about-title'>About Us</div>
                            </div>
                            <div className='col-6'>
                                <p className='lorem'>Misi kami sederhana: memerangi angka pengangguran dengan membantu pencari kerja menemukan pekerjaan yang paling sesuai dengan keterampilan dan pengalaman mereka melalui social recruitment platform kami.</p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AboutUs