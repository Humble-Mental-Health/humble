import React from 'react'
import './TopicsSuggested.css'
import Button from '../../../UI/Button/Button'

function TopicsSuggested({title, button}) {
    return (
        <div className='topics__suggested'>
            <h3>{title}</h3>
            {button && <Button/>}
        </div>
    )
}

export default TopicsSuggested
