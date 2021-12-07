import React from 'react'

//Style sheet
import './../styles/globalStyle.css'

import info from './../Images/info.png'

const alertInfo = ({ data, wd }) => {
    //const wid = wd

    return (
        <div className='alert alert-info' style={{ width: wd }}>
            <div className='tmp'>
                <div className='info-img'>
                    <img src={info} alt='' />
                </div>
                <div className='alert-data-text'>
                    <div className='alert-heading'>{data.title}</div>
                    <div className='alert-text'>{data.subtext}</div>
                </div>
            </div>
        </div>
    )
}

export default alertInfo
