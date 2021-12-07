import React from 'react'

import successSrc from './../Images/success.png'

const alertSuccess = ({ data, wd, cls }) => {
    return (
        <div className={`alert alert-success ${cls}`} style={{ width: wd }}>
            <div className='tmp'>
                <div className='info-img'>
                    <img src={successSrc} alt='' />
                </div>
                <div className='alert-data-text'>
                    <div className='alert-heading'>{data}</div>
                    {/* <div className='alert-text'>{data.subtext}</div> */}
                </div>
            </div>
        </div>
    )
}

export default alertSuccess
