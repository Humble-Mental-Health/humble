import React from 'react'
import './Partial.css'

function Partial({icons, orientation, topic, para}) {

    let partial__img = '';
    if (orientation === 'left') {
        partial__img = 'partial__img__left'
    } else {
        partial__img = 'partial__img__right'
    }

    return (
        <div className='partial'>
            <div className={partial__img}>
                <img src={icons} alt=""/>
            </div>
            <div className={orientation}>
                <h3>{topic}</h3>
                <p>{para}</p>
            </div>
        </div>
    )
}

export default Partial
