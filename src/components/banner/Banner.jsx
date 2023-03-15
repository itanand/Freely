import React from 'react';
import './Banner.scss';
import banner from '../../assets/ban.webp'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className="text-jee">
                <h2>SkillPur Logo</h2>
                <h1>Make an incredible logo in minutes</h1>
                <p>Pre-designed by top talent. Just add your touch.</p>
                </div>

                <div className="items">

                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner