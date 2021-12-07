import React from 'react'

import errorSrc from './../Images/error.png'

const alertError = ({ data, wd, cls }) => {
    return (
        <div className={`alert alert-error ${cls}`} style={{ width: wd }}>
            <div className='tmp'>
                <div className='info-img'>
                    <img src={errorSrc} alt='' />
                </div>
                <div className='alert-data-text'>
                    <div className='alert-heading'>{data}</div>
                    {/* <div className='alert-text'>{data.subtext}</div> */}
                </div>
            </div>
        </div>
    )
}

export default alertError
