import React from 'react';
import icon from '../../Assets/Images/lokasi.png'
//IMPORT REACT ICONS
import { GoLocation } from 'react-icons/go';
import { FiArrowRight } from 'react-icons/fi';

function JoinTeam() {
    return (
        <>
            <section id='jointeam'>
                <div className='container px-5'>
                    <div className='row'>
                        <div className='join-title'>
                            Join Our team
                        </div>
                        <div className='join-desc'>
                            <p>We’re building the first social recruitment platform in Indonesia. Jobseeker Company is<br></br>perfect for those who:</p>
                            <ul>
                                <li>Want to work in a fast-paced startup</li>
                                <li>Love having a sense of ownership to your projects</li>
                                <li> Want to take part in building the next big startup in Indonesia</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='position-title'>
                            Current Positions
                        </div>
                        <div className='col-2 location-title'>
                            <div className='all'><b>All Locations</b></div>
                            <div className='jakarta'>Jakarta</div>
                            <div className='malang'>Malang</div>
                        </div>
                        <div className='col-10'>
                            <div className='col-12'>
                                <div className='card-positions px-2 py-1'>
                                    <div className='row'>
                                        <div className='col-5'>
                                            <div className='role-title'>Marketing Manager</div>
                                        </div>
                                        <div className='col-4'>
                                            <div className='lokasi'><img src={icon} alt='icon' /> Jakarta</div>
                                        </div>
                                        <div className='col-2 text-end '>
                                            <button type="button" class="apply-btn">Apply</button>
                                        </div>
                                    </div>
                                    <div className='row role-desc'>
                                        <div className='col-2'>
                                            <div className='sub-title'>Requirements:</div>
                                        </div>
                                        <div className='col-10'>
                                            <div>Bachelor Degree</div>
                                            <div>Min. 5 years of experience</div>
                                        </div>
                                    </div>
                                    <div className='row role-desc'>
                                        <div className='col-2'>
                                            <div className='sub-title'>Salary:</div>
                                        </div>
                                        <div className='col-10'>
                                            <div>IDR 10 - 15 Millions</div>
                                        </div>
                                    </div>
                                    <div className='row time'>
                                        <div>10 mins ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='card-positions px-2 py-1'>
                                    <div className='row'>
                                        <div className='col-5'>
                                            <div className='role-title'>Frontend Developer</div>
                                        </div>
                                        <div className='col-4'>
                                            <div className='lokasi'><img src={icon} alt='icon' /> Malang</div>
                                        </div>
                                        <div className='col-2 text-end '>
                                            <button type="button" class="apply-btn">Apply</button>
                                        </div>
                                    </div>
                                    <div className='row role-desc'>
                                        <div className='col-2'>
                                            <div className='sub-title'>Requirements:</div>
                                        </div>
                                        <div className='col-10'>
                                            <div>Bachelor Degree</div>
                                            <div>Min. 2 years of experience</div>
                                        </div>
                                    </div>
                                    <div className='row role-desc'>
                                        <div className='col-2'>
                                            <div className='sub-title'>Salary:</div>
                                        </div>
                                        <div className='col-10'>
                                            <div>IDR 7 - 10 Millions</div>
                                        </div>
                                    </div>
                                    <div className='row time'>
                                        <div>24 mins ago</div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='card-positions px-2 py-1'>
                                    <div className='row'>
                                        <div className='col-5'>
                                            <div className='role-title'>Backend Developer</div>
                                        </div>
                                        <div className='col-4'>
                                            <div className='lokasi'><img src={icon} alt='icon' /> Jakarta</div>
                                        </div>
                                        <div className='col-2 text-end '>
                                            <button type="button" class="apply-btn">Apply</button>
                                        </div>
                                    </div>
                                    <div className='row role-desc'>
                                        <div className='col-2'>
                                            <div className='sub-title'>Requirements:</div>
                                        </div>
                                        <div className='col-10'>
                                            <div>Bachelor Degree</div>
                                            <div>Min. 5 years of experience</div>
                                        </div>
                                    </div>
                                    <div className='row role-desc'>
                                        <div className='col-2'>
                                            <div className='sub-title'>Salary:</div>
                                        </div>
                                        <div className='col-10'>
                                            <div>IDR 7 - 10 Millions</div>
                                        </div>
                                    </div>
                                    <div className='row time'>
                                        <div>24 mins ago</div>
                                    </div>
                                </div>
                                <div className='text-center pt-3'>
                                    <a className='more-btn' href='/'>Learn More <FiArrowRight /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default JoinTeam