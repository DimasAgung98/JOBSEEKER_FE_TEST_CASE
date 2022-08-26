import React from 'react';

function Hero() {
    return (
        <>
            <section id='hero'>
                <div className='BG w-100 vh-100 d-flex justify-content-cente align-items-center'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='hero-title'>Connecting people with opportunities</div>
                            <p className='hero-desc'>Kami percaya setiap orang berhak memiliki kesempatan untuk berkarya. Jobseeker Company hadir, untuk membantu menghubungkan mereka dengan kesempatan berkembang demi kehidupan yang lebih baik.</p>
                            <div className='w-100 text-center'>
                                <button type="button" className="btn hero-btn">See Our Product</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;