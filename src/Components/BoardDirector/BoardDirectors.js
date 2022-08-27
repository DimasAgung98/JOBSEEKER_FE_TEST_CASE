import React from 'react';
import people1 from '../../Assets/Images/o1.svg';
import people2 from '../../Assets/Images/o2.svg';
import people3 from '../../Assets/Images/o3.svg';

function BoardDirectors() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='bod-title'>
                        <div>Board of Directors</div>
                    </div>
                </div>
                <div className='row justify-content-center text-center'>
                    <div className='col-2'>
                        <img src={people1} alt='people' />
                        <div className='name-title'>Chandra Ming</div>
                        <div className='name-desc'>Founder & CEO</div>
                    </div>
                    <div className='col-2 mx-4'>
                        <img src={people2} alt='people' />
                        <div className='name-title'>Juliana Siburian</div>
                        <div className='name-desc'>CO-Founder & COO</div>
                    </div>
                    <div className='col-2 '>
                        <img src={people3} alt='people' />
                        <div className='name-title'>Alankar Joshi</div>
                        <div className='name-desc'>CO-Founder & CFO</div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default BoardDirectors