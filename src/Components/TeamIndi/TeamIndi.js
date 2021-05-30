import React from 'react'
import './TeamIndi.css'

function TeamIndi({image, name, position}) {
    return (
        <div className='teamindi'>
            <img src={image} alt='' />
            <h1>{name}</h1>
            <p>{position}</p>
            {/* <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 		</div> */}
        </div>
    )
}

export default TeamIndi
