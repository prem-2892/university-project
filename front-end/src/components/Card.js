import React from 'react'

// Resources
import locationSrc from './../Images/location.png'
import cgpaSrc from './../Images/cgpa.png'
import requirements from './../Images/requirement.png'

import { Link } from 'react-router-dom'

const Card = ({ university }) => {
    //console.log(`${university}`);

    return (
        <div className='card'>
            <div className='header'>
                <span className='uni-name'>{university.name}</span>
            </div>
            <div className='card-body'>
                <div className='location row'>
                    <img src={locationSrc} alt='' />
                    <div className='loc-txt'>
                        {university.location}, {university.state}
                    </div>
                </div>
                <div className='academic row'>
                    <img src={cgpaSrc} alt='' />
                    <div className='grad-txt'>{university.academic}</div>
                </div>
                <div className='ielts row'>
                    <img src={requirements} alt='' />
                    <div className='ielts-txt'>{`IELTS - ${university.ielts}`}</div>
                </div>
            </div>
            <Link
                to={`/university/${university._id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
            >
                <button className='cta'>
                    <span>Details</span>
                    <svg width='15px' height='10px' viewBox='0 0 13 10'>
                        <path d='M1,5 L11,5'></path>
                        <polyline points='8 1 12 5 8 9'></polyline>
                    </svg>
                </button>
            </Link>
        </div>
    )
}

export default Card
