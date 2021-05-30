import React from 'react'
import HeaderIcon from '../../../UI/HeaderIcon/HeaderIcon'
import './BlogSuggested.css'

function BlogSuggested({photoUrl, userName, topic, date, postPhotoUrl}) {
    return (
        <div className='blog__suggested'>
            <div className='blog__suggested__left'>
                <HeaderIcon avatar={true} photoUrl={photoUrl} title={userName} />
                <h3>{topic}</h3>
                <p>{date}</p>
            </div>
            <div className='blog__suggested__right'>
                <img src={postPhotoUrl} alt=""/>
            </div>
        </div>
    )
}

export default BlogSuggested
