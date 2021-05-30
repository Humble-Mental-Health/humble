import React from 'react';
import BigAvatar from '../../../UI/BigAvatar/BigAvatar';
import Button from '../../../UI/Button/Button';
import './ProfileSuggested.css';

function ProfileSuggested({name, content, photoUrl}) {
    return (
        <div className='profile__suggested'>
            <BigAvatar avatar={true} photoUrl={photoUrl} />
            <div className='content'>
                <h3>{name}</h3>
                <p>{content}</p>
            </div>
            <Button/>
        </div>
    )
}

export default ProfileSuggested
