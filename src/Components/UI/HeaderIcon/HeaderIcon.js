import { Avatar } from '@material-ui/core';
import React from 'react'
import './HeaderIcon.css'

function HeaderIcon({avatar, Icon, photoUrl, title}) {
    return (
        <div className='Icon'>
            {Icon && <Icon className='header_icon'/>}
            {avatar && <Avatar className='header_icon' src={photoUrl}/>}
            {title && <h3 className='header__title'>{title}</h3>}
        </div>
    )
}

export default HeaderIcon
