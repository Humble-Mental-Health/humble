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
                        You get 4 yoga classes, by our certified yoga instructors, where you’ll learn about basic Asanas to help you build flexibility in your body.
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
