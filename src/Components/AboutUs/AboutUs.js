import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Pakchan from '../../Assets/Images/group.png';

const sources = {
    youtube: 'https://www.youtube.com/watch?v=DgqDDI2R9m4',
}

function AboutUs(props) {
    const ref = useRef();
    const [show, setShow] = useState(false);
    const [source] = useState(sources.youtube);

    return (
        <section id='aboutus'>
            <div className='about-us-bg mx-auto'>
                <div className='wrapper-about'>
                    <div className='player-wrapper'>
                        {show ? (
                            <ReactPlayer className='react-player'
                                width={952}
                                height={535}
                                playing={true}
                                ref={ref}
                                url={source}
                            />
                        ) : null}
                    </div>
                    {/* <a href='https://youtu.be/DgqDDI2R9m4/' target="_blank" rel='noreferrer'><img src={Pakchan} onClick={handleVideo} alt='pakchan' /></a> */}
                    <div>
                        {show ? null : (
                            <img onClick={() => setShow(!show)} src={Pakchan} alt='pakchan' />
                        )}
                    </div>
                    {/* <img onClick={() => setShow(!show)} src={Pakchan} alt='pakchan' /> */}
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
    )
}

export default AboutUs;