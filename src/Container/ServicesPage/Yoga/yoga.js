import React from 'react'
import './yoga.css'
import YogaImage from '../../../assets/YogaDesktop.png'
const yoga = () => {
    return (
        <div className='yoga'>
            <div className="yoga__container">
                <div className="yoga__textContainer">
                    <h1 className="yoga__heading">Yoga</h1>
                    <p className="yoga__para">
                    Mindful Yoga or Mindfulness Yoga combines Buddhist-style mindfulness practice with yoga as exercise to provide a means of exercise that is also meditative and useful for reducing stress.
                    </p>
                    <button className="yoga__button">Start Now</button>
                </div>

                <div className="yoga__imageContainer">
                    <img src={YogaImage} /> 
                </div>
            </div>  
        </div>
    )
}

export default yoga
