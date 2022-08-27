import React from 'react';
import Culture from '../../Assets/Images/culture.png';

function OurCulture() {
    return (
        <>
            <section id='ourculture'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-6 text-center'>
                            <img src={Culture} alt='culture' />
                        </div>
                        <div className='col-6 ps-5'>
                            <div className='culture-title'>Our Culture</div>
                            <p className='culture-desc'>Though we move at a fast pace, and it might seem that we don’t have time to sit and explain things, every employee at Jobseeker Company loves sharing, helping and lifting others. We have unique set of values on clear goals that define success.</p>
                            <button type="button" class="btn-join">Join Us</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default OurCulture